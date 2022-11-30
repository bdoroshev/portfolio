import Meta from '../utils/meta'
import Image from 'next/image'
import styles from '../styles/index.module.scss'

export default function Home() {
  return (
    <>
			<Meta title="Bogdan Doroshev - Shopify Expert / Custom Theme Developer" description="kekW" />
			<section className={styles.index}>
				<div className="container">
					<div className={styles.index__content}>
						<div className={styles.index__image}>
							<Image src="/bogdan.jpg" width={450} height={500} priority={true} alt="Bogdan Doroshev" />
						</div>
						<div className={styles.index__cta}>
							<div className={styles.index__title}>
								<h1><span>SHOPIFY</span> EXPERT</h1>
								<h2>BOGDAN DOROSHEV</h2>
							</div>
							<p>I’m <a href="https://www.upwork.com/freelancers/~01adae76a6fd6cd404" target="_blank">TOP-Rated full-time Upwork freelancer</a> and passionate Front End / Shopify Developer since 2016. If you need a professional, modern, and responsive Shopify / HTML website – you are in the right place. I work fast and clearly, and I speak and write English fluently, so our communication will be smooth and clear.</p>
						</div>
					</div>
				</div>
			</section>
    </>
  )
}
