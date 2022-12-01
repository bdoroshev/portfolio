import Head from 'next/head'
import { IMeta } from '../models'

export default function Meta({title, description}: IMeta) {
	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
		</Head>
	)
}