import { Button, Code, Link, Page, Spacer, Table, Text } from '@geist-ui/react'
import { useRouter } from 'next/router'
const fetch = require('node-fetch')

const HomeRoutes = ({ routes }) => {
	console.log(routes)

	return (
		<>
			<Page size="small">
				<Text h1> Available Public Routes</Text>
				<Text>URL parameter forwarding is available.</Text>
				<Table
					data={routes.map((route) => ({
						...route,
						url: (
							<Link color href={route.url}>
								{route.url}
							</Link>
						),
						name: (
							<Link color href={route.name}>
								{route.name}
							</Link>
						),
					}))}>
					<Table.Column prop="name" label="Route" />
					<Table.Column prop="title" label="Title" />
					<Table.Column prop="description" label="Description" />
					<Table.Column prop="url" label="url" />
				</Table>
				<Spacer />
				<Text small style={{ marginTop: '1rem' }}>
					[
					<Link href="https://github.com/rishiosaur/ll">
						<Code>ll</Code>
					</Link>
					] by{' '}
					<Link href="https://rishi.cx" color>
						Rishi Kothari
					</Link>
				</Text>
			</Page>
		</>
	)
}

export default HomeRoutes

export const getServerSideProps = async () => {
	const response = await fetch(
		`https://firestore.googleapis.com/v1/projects/${process.env.projectId}/databases/(default)/documents/routes/`
	)
		.then((x) => x.json())
		.then((d) => d.documents)

	return {
		props: {
			routes: response
				.map((d) => ({
					name: d.name.replace(
						`projects/${process.env.projectId}/databases/(default)/documents/routes/`,
						''
					),
					url: d.fields.url.stringValue,
					public: d.fields.public.booleanValue,
					description: d.fields.description?.stringValue || 'n/a',
					title: d.fields.title?.stringValue || 'n/a',
				}))
				.filter((x) => x.public),
		},
	}
}
