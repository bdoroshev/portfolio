import Meta from '../utils/meta'
import styles from '../styles/404.module.scss'

export default function Error() {
  return (
    <>
			<Meta title="404" description="kekW" />
			<section>
				<div className="container">
					<div className={styles.content__404}>
						<div className={styles.title__404}>
							<h1>4<span>0</span>4</h1>
							<h2>Page Not Found</h2>
						</div>
					</div>
				</div>
			</section>
    </>
  )
}
