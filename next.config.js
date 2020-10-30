const fetch = require('node-fetch')

module.exports = {
	async redirects() {
		const urls = await fetch(process.env.apiURL).then((x) => x.json())

		return urls.map((x) => ({
			permanent: true,
			source: `/${x.name}/:wildcards*`,
			destination: `${x.url}/:wildcards*`,
		}))
	},
	github: {
		autoAlias: true,
		enabled: true,
	},
	trailingSlash: false,
	public: true,
}
