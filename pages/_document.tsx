import Document, { Html, Head, Main, NextScript } from 'next/document'
import { CssBaseline } from '@geist-ui/react'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		const styles = CssBaseline.flush()

		return {
			...initialProps,
			styles: (
				<>
					{initialProps.styles}
					{styles}
				</>
			),
		}
	}

	render() {
		return (
			<Html>
				<head>
					<meta name="title" content="LL" />
					<meta name="description" content="The self-hosted link shortener!" />
					<meta
						name="keywords"
						content="shorten, link, good, cheap, fast, href"
					/>
					<meta name="robots" content="index, follow" />
					<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
					<meta name="language" content="English" />
					<meta name="author" content="Rishi Kothari" />

					<link rel="shortcut icon" href="/ll.png" />
					<title>Public links.</title>
				</head>
				<Head />
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
