const fetch = require('node-fetch')

module.exports = {
	async redirects() {
		const urls = await fetch(process.env.apiURL).then((x) => x.json())

		const redirects = urls.map((x) => ({
			permanent: true,
			source: `/${x.name}/:wildcards*`,
			destination: `${x.url}/:wildcards*`,
		}))

		if (process.env.baseUrl) {
			redirects.push({
				permanent: true,
				source: '/',
				destination: `${process.env.baseUrl}`,
			})
		}

		console.log(redirects)

		return redirects
	},
	async rewrites() {
		const rewrites = []

		if (!process.env.baseUrl) {
			rewrites.push({
				source: '/',
				destination: '/list',
			})
		}

		if (process.env.list) {
			rewrites.push({
				source:
					process.env.list[0] === '/'
						? process.env.list
						: `/${process.env.list}`,
				destination: '/list',
			})
		}

		return rewrites
	},
	github: {
		autoAlias: true,
		enabled: true,
	},
	trailingSlash: false,
	public: true,
}
