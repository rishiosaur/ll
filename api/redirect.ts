import { NowRequest, NowResponse } from '@vercel/node'
import firebase from 'firebase'

export default async (req: NowRequest, res: NowResponse) => {
	const { id } = req.query

	console.log(req.url)

	console.log(id)

	const {
		apiKey,
		authDomain,
		databaseURL,
		projectId,
		storageBucket,
		messagingSenderId,
		appId,
		measurementId,
	} = process.env

	const f = firebase.initializeApp({
		apiKey,
		authDomain,
		databaseURL,
		projectId,
		storageBucket,
		messagingSenderId,
		appId,
		measurementId,
	})

	const url = await f
		.firestore()
		.collection('routes')
		.doc(id)
		.get()
		.then((x) => x.data())

	if (url) {
		const u = url.url + req.url.replace(`/${id}`, '')

		console.log(u)

		res.redirect(301, u.replace(`?id=${id}`, ''))
	} else {
		res.redirect(301, 'https://rishi.cx')
	}

	res.end('Hello')
}
