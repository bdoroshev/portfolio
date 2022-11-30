import Header from './header/header'
import Button from './button/button'


export default function Layout({ children }) {
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