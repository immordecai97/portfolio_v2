import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '@/css/CertificateSwiper.scss';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

import { certificates } from '@/data/resume.json';

export default function CertificateSwiper() {
	return (
		<>
			<Swiper
				effect={'coverflow'}
				grabCursor={true}
				centeredSlides={true}
				slidesPerView={'auto'}
				coverflowEffect={{
					rotate: 50,
					stretch: 0,
					depth: 100,
					modifier: 1,
					slideShadows: true,
				}}
				pagination={true}
				modules={[EffectCoverflow, Pagination]}
				className="mySwiper">
				{
					certificates.map(({ url }, index) => (
						<SwiperSlide key={index}>
							<img src={`/src/assets/${url}`} />
						</SwiperSlide>
					))
				}
			</Swiper>
		</>
	);
}
