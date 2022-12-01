import Image from 'next/image'
import styles from '../styles/projects.module.scss'
import { IProject } from '../models'

export default function ProjectSlide({ url, image, title, role, scope, description }: IProject){
	return (
		<a href={url} target="_blank" rel="noreferrer">
			<Image src={image} width={450} height={500} priority={true} alt={title} />
			<div className={styles.slide__content}>
				<h2>On project role: <b>{role}</b></h2>
				<h2>Scope of work: <b>{scope}</b></h2>
				<h1>{title}</h1>
				<p>{description}</p>
			</div>
		</a>
	)
}

