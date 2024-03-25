// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './slide-section.css';
import Button from '../../components/button';

import { FreeMode, Pagination } from 'swiper/modules';

export default function SlideSection() {
	const images = [
		{
			picture: '/images/png/pic7.png',
			id: new Date().getTime() + 1,
		},
		{
			picture: '/images/png/pic8.png',
			id: new Date().getTime() + 2,
		},
		{
			picture: '/images/png/pic9.png',
			id: new Date().getTime() + 3,
		},
		{
			picture: '/images/png/pic10.png',
			id: new Date().getTime() + 4,
		},
		{
			picture: '/images/png/pic7.png',
			id: new Date().getTime() + 5,
		},
		{
			picture: '/images/png/pic8.png',
			id: new Date().getTime() + 6,
		},
		{
			picture: '/images/png/pic9.png',
			id: new Date().getTime() + 7,
		},
		{
			picture: '/images/png/pic10.png',
			id: new Date().getTime() + 8,
		},
		{
			picture: '/images/png/pic7.png',
			id: new Date().getTime() + 9,
		},
		{
			picture: '/images/png/pic8.png',
			id: new Date().getTime() + 10,
		},
		{
			picture: '/images/png/pic9.png',
			id: new Date().getTime() + 11,
		},
		{
			picture: '/images/png/pic10.png',
			id: new Date().getTime() + 12,
		},
	];
	return (
		<section className="bg-[var(--color-green-dark)] w-full py-24 text-white relative">
			<h2 className="text-3xl md:text-7xl font-semibold mb-20 text-center">
				Lorem ipsum dolor sit amet
			</h2>
			<Swiper
				spaceBetween={20}
				slidesPerView="auto"
				centeredSlides={true}
				freeMode={true}
				pagination={{
					el: '.swiper-pagination',
					enabled: true,
				}}
				navigation={false}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
				modules={[FreeMode, Pagination]}
				className="w-full h-full">
				{images.map((i) => (
					<SwiperSlide key={`slide_${i.id}_image`} className="max-w-max h-auto">
						<img src={i.picture} alt="Picture" className="w-[480px] h-auto" />
					</SwiperSlide>
				))}
			</Swiper>
			<div className="swiper-pagination static flex flex-row gap-x-1 justify-center items-center my-3 h-12"></div>
			<Button className="bg-white min-h-[68px] max-w-max mx-auto mt-16">
				<span className="text-xl font-semibold text-black">view all</span>
			</Button>
		</section>
	);
}
