import Meta from '../utils/meta'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from '../styles/projects.module.scss'

import { projects } from '../data/projects';
import ProjectSlide from '../components/projectSlide';

import { IProject } from '../models'

export default function Projects() {

	const listOfProjects = projects.map(( { url, image, title, role, scope, description }: IProject, i:number ) =>
		<SwiperSlide key={i}>
			<ProjectSlide url={url} image={image} title={title} role={role} scope={scope} description={description} />
		</SwiperSlide>
	) 

  return (
    <>
			<Meta title="Bogdan Doroshev - Shopify Expert / Custom Theme Developer Skills" description="kekW" />
			<section className={styles.projects}>
				<div className="container">
					<div className={styles.projects__content}>
						<Swiper
							mousewheel={true}
							autoHeight={true}
							loop={true}
							speed={600}
							slidesPerView="auto"
							spaceBetween={20}
							breakpoints={{
								992: {
									slidesPerView: 2,
									spaceBetween: 60,
								},
							}}
							pagination={{
								type: "progressbar",
								el: `.${styles.pagination}`,
							}}
							modules={[Mousewheel, Pagination]}
						>
								{ listOfProjects }
							<div className={styles.pagination}></div>
						</Swiper>
					</div>
				</div>
			</section>
    </>
  )
}