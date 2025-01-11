
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import slide1 from '../assets/home/slide1.jpg';
import slide2 from '../assets/home/slide2.jpg';
import slide3 from '../assets/home/slide3.jpg';
import slide4 from '../assets/home/slide4.jpg';
import slide5 from '../assets/home/slide5.jpg';
import CommonHeader from '../sheard/CommonHeader';

const OrderOnline = () => {
    return (
        <div className='max-w-screen-lg mx-auto'>
            <CommonHeader heading={'ORDER ONLINE'} subHeading={'---From 11:00am to 10:00pm---'}></CommonHeader>
            <Swiper
                slidesPerView={1}
                spaceBetween={3}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 5,
                        spaceBetween: 20,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h2 className='text-xl text-center shadow-xl text-white font-extralight md:-mt-10 mb-10'>SALAD</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                <h2 className='text-xl text-center shadow-xl text-white font-extralight md:-mt-10 mb-10'>SALAD</h2></SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h2 className='text-xl text-center shadow-xl text-white font-extralight md:-mt-10 mb-10'>SALAD</h2>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h2 className='text-xl text-center shadow-xl text-white font-extralight md:-mt-10 mb-10'>SALAD</h2>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h2 className='text-xl text-center shadow-xl text-white font-extralight md:-mt-10 mb-10'>SALAD</h2>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h2 className='text-xl text-center shadow-xl text-white font-extralight md:-mt-10 mb-10'>SALAD</h2>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h2 className='text-xl text-center shadow-xl text-white font-extralight md:-mt-10 mb-10'>SALAD</h2></SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                <h2 className='text-xl text-center shadow-xl text-white font-extralight md:-mt-10 mb-10'>SALAD</h2>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h2 className='text-xl text-center shadow-xl text-white font-extralight md:-mt-10 mb-10'>SALAD</h2>
                    </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h2 className='text-xl text-center shadow-xl text-white font-extralight md:-mt-10 mb-10'>SALAD</h2>
                    </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default OrderOnline;