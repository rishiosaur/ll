import { CssBaseline, GeistProvider } from '@geist-ui/react'

const App = ({ Component, pageProps }) => (
	<GeistProvider theme={{ type: 'dark' }}>
		<CssBaseline />
		<Component {...pageProps} />
	</GeistProvider>
)

export default App
