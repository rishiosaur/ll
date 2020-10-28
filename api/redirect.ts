import { NowRequest, NowResponse } from '@vercel/node'

const fetch = require('node-fetch')

export default async (req: NowRequest, res: NowResponse) => {
	const { id } = req.query

	const { projectId, baseUrl } = process.env
	const url = await fetch(
		`https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/routes/${id}`
	)
		.then((x) => x.json())
		.then((x) => x.fields)

	if (url) {
		const u = url.url.stringValue + req.url.replace(`/${id}`, '')

		console.log(`Sending url ${u}`)

		res.redirect(301, u.replace(`?id=${id}`, ''))
	} else {
		res.redirect(301, baseUrl)
	}

	res.end('Hello')
}
