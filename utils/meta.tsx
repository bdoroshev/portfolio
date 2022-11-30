import Head from 'next/head'

export default function Meta({title, description}) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
		</Head>
	)
}