import {
	Button,
	Code,
	Link,
	Page,
	Spacer,
	Table,
	Text,
	useMediaQuery,
} from '@geist-ui/react'
import { useRouter } from 'next/router'
const fetch = require('node-fetch')

const HomeRoutes = ({ routes }) => {
	console.log(routes)

	const upMD = useMediaQuery('md', { match: 'up' })

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
					{upMD && <Table.Column prop="description" label="Description" />}
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

export const getStaticProps = async () => {
	const response = await fetch(process.env.apiURL).then((x) => x.json())

	return {
		props: {
			routes: response
				.map((d) => ({
					name: d.name,
					url: d.url,
					public: d.public,
					description: d.description || 'n/a',
					title: d.title || 'n/a',
				}))
				.filter((x) => x.public),
		},
	}
}
