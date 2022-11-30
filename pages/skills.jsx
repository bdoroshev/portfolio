import Meta from '../utils/meta'
import styles from '../styles/skills.module.scss'

const skills = {
	tools: {
		1: "Vs Code",
		2: "Figma",
		3: "Photoshop",
		4: "Adobe XD",
		5: "PM Tools"
	},
	hardSkills: {
		1: {
			title: "Html/Css"
		},
		2: {
			title: "Javascript"
		},
		3: {
			title: "Shopify Liquid"
		},
		4: {
			title: "Shopify CLI"
		},
		5: {
			title: "Git / Github"
		},
		6: {
			title: "React.js"
		},
		7: {
			title: "React Native",
			progress: true
		},
		8: {
			title: "Node.js",
			progress: true
		},
		9: {
			title: "TypeScript",
			progress: true
		},
		10: {
			title: "Shopify API integration"
		},
		11: {
			title: "Custom eCommerce themes"
		},
		12: {
			title: "Customize checkout process in Shopify Plus"
		}
	}
}

export default function Skills() {

	const listOfSkills = Object.keys(skills.hardSkills).map(( i ) =>
		<li key={i}><h3>{ skills.hardSkills[i].title } { skills.hardSkills[i].progress ? <p>(In progress)</p> : "" }</h3></li>
	)

	const listOfTools = Object.keys(skills.tools).map(( i ) =>
		<li key={i}><h3>{ skills.tools[i] }</h3></li>
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