import styles from './button.module.scss'

export default function Button() {
	return (
		<a href="https://www.upwork.com/freelancers/~01adae76a6fd6cd404" target="_blank" className={styles.button}>
			<div className={styles.container}>
				<h4>LET’S TALK</h4>
				<svg width="100%" viewBox="0 0 104 52" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M102.475 28.4749C103.842 27.108 103.842 24.892 102.475 23.5251L80.201 1.25126C78.8342 -0.115572 76.6181 -0.115572 75.2513 1.25126C73.8844 2.6181 73.8844 4.83418 75.2513 6.20101L95.0503 26L75.2513 45.799C73.8844 47.1658 73.8844 49.3819 75.2513 50.7487C76.6181 52.1156 78.8342 52.1156 80.201 50.7487L102.475 28.4749ZM0 29.5H100V22.5H0V29.5Z" fill="#2A2A2A"/>
				</svg>
			</div>
		</a>
	)
}