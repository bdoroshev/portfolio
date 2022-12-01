import Meta from '../utils/meta'
import styles from '../styles/skills.module.scss'

import { skills } from '../data/skills'
import { IHardSkills } from '../models'

export default function Skills() {

	const listOfSkills = skills.hardSkills.map(( { title, progress }: IHardSkills, i:number ) =>
		<li key={i}><h3>{ title } { progress ? <p>(In progress)</p> : "" }</h3></li>
	)

	const listOfTools = skills.tools.map(( title: string, i:number ) =>
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