import Meta from '../utils/meta'
import styles from '../styles/skills.module.scss'

const skills = {
	tools: [ "Vs Code", "Figma", "Photoshop", "Adobe XD", "PM Tools" ],
	hardSkills: [
		{ title: "Html/Css" },
		{ title: "Javascript" },
		{ title: "Shopify Liquid" },
		{ title: "Shopify CLI" },
		{ title: "Git / Github" },
		{ title: "React.js" },
		{ title: "React Native", progress: true },
		{ title: "Node.js", progress: true },
		{ title: "TypeScript", progress: true },
		{ title: "Shopify API integration" },
		{ title: "Custom eCommerce themes" },
		{ title: "Customize checkout process in Shopify Plus" }
	]
}

export default function Skills() {

	const listOfSkills = skills.hardSkills.map(( { title, progress }, i ) =>
		<li key={i}><h3>{ title } { progress ? <p>(In progress)</p> : "" }</h3></li>
	)

	const listOfTools = skills.tools.map(( title, i ) =>
		<li key={i}><h3>{ title }</h3></li>
	)

  return (
    <>
			<Meta title="Bogdan Doroshev - Shopify Expert / Custom Theme Developer Skills" description="kekW" />
			<section className={styles.skills}>
				<div className="container">
					<div className={styles.skills__content}>
						<div className={styles.skills__row}>
							<h2>PROGRAMMING LANGUAGES & OTHERS</h2>
							<ul className={styles.skills__grid}>
								{ listOfSkills }
							</ul>
						</div>
						<div className={styles.skills__row}>
							<h2>TOOLS</h2>
							<ul className={styles.skills__grid}>
								{ listOfTools }
							</ul>
						</div>
					</div>
				</div>
			</section>
    </>
  )
}