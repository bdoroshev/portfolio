import Meta from '../utils/meta'
import styles from '../styles/projects.module.scss'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination } from "swiper";
import 'swiper/css';

const projects = {
	1: {
		url: 'https://pawpantry.com.au/',
		image: '/pawpantry.jpg',
		title: 'Paw Pantry',
    description: 'Paw Pantry a one-stop-shop born to provide everything you need in pet care. Paw Pantry here to help your pet live a happier and healthier life.',
		scope: 'Develop website from Figma design to custom Shopify theme',
		role: 'Shopify Developer part of Vine Digital team'
	},
	2: {
		url: 'https://simplyroastedcrisps.co.uk/',
		image: '/simplyroasted.jpg',
		title: 'Simply Roasted',
    description: 'Simply Roasted here to change the crisps we eat, for the better, forever. that’s a big claim, but we believe we’ve found a better way to make crisps, with everything you want (taste, crunch, satisfaction) and less of what you don’t want (calories, fat, salt).',
		scope: 'Develop website from Figma design to custom Shopify theme',
		role: 'hopify Developer part of Superco team'
	},
	3: {
		url: 'https://vitalitycycles.com/',
		image: '/vitalitycycles.jpg',
		title: 'Vitality Cycles',
    description: 'Custom formulated by Dr Jennifer Daniels, Vitality Capsules are infused with natural ingredients such as garlic, ginger, and aloe, our vitality capsules are vital to maintaining a healthy and active life.',
		scope: 'Develop website from Figma design to custom Shopify theme',
		role: 'Shopify Developer'
	},
	4: {
		url: 'https://www.zendxb.com/',
		image: '/zendxb.jpg',
		title: 'Zendxb',
    description: 'Dubai’s first home delivered STI test and treatment service. Courier delivery and pickup service. State of the art molecular laboratory testing. Results delivered to your mobile in under 3 hours with VIP processing.',
		scope: 'Design website in Figma and develop on Shopify',
		role: 'Designer and Shopify Developer'
	},
	5: {
		url: 'https://thesimpleroot.co.uk/',
		image: '/thesimpleroot.jpg',
		title: 'The Simple Root',
    description: 'Everything we do starts with simple root veg. In fact, its our #1 ingredient. We take British grown potatoes, parsnips & sweet potatoes, and with a little thought and care, turn them into the creamiest sauces, dips and cheeses - no dairy needed.',
		scope: 'Develop website from Figma design to custom Shopify theme',
		role: 'Shopify Developer part of Superco team'
	},
}

export default function Projects() {

	const listOfProjects = Object.keys(projects).map(( i ) =>
		<SwiperSlide key={i}>
			<a href={projects[i].url} target="_blank" rel="noreferrer">
				<Image src={projects[i].image} width={450} height={500} priority={true} alt={projects[i].title} />
				<div className={styles.slide__content}>
					<h2>On project role: <b>{projects[i].role}</b></h2>
					<h2>Scope of work: <b>{projects[i].scope}</b></h2>
					<h1>{projects[i].title}</h1>
					<p>{projects[i].description}</p>
				</div>
			</a>
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
							breakpoints={{
								992: {
									slidesPerView: 2,
									spaceBetween: 60,
								},
							}}
							pagination={{
								type: "progressbar",
								el: ".pagination",
							}}
							modules={[Mousewheel, Pagination]}
						>
							{ listOfProjects }
							<div className="pagination"></div>
						</Swiper>
					</div>
				</div>
			</section>
    </>
  )
}