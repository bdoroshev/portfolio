import Link from "next/link"
import { useRouter } from 'next/router';
import styles from './header.module.scss'

export default function Header() {
	const router = useRouter();
	return (
		<header className={styles.header}>
			<ul className={styles.header__menu}>
				<li><Link href="/" className={router.pathname == "/" ? styles.active : ""}>HOME</Link></li>
				<li><Link href="/projects" className={router.pathname == "/projects" ? styles.active : ""}>PROJECTS</Link></li>
				<li><Link href="/skills" className={router.pathname == "/skills" ? styles.active : ""}>SKILLS</Link></li>
			</ul>
		</header>
	)
}