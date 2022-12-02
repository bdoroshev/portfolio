import Header from './header/header'
import Button from './button/button'
import { ReactNode } from 'react'

interface LayoutProps {
	children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<div className="wrapper">
				<main className="page">
					<div className="container">
						<Header />
					</div>
					{ children }
					<Button />
				</main>
			</div>
		</>
	)
}