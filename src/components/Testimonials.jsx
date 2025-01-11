// import Swiper from 'swiper';
import CommonHeader from '../sheard/CommonHeader';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <div className='mb-20 mt-10'>
            <CommonHeader heading={'TESTIMONIAL'} subHeading={'---What Our Clients Say---'}></CommonHeader>
            <Swiper navigation={true} modules={[Navigation]} className="max-w-screen-xl mx-auto">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                        className='text-center px-40 space-y-4'
                    >
                        <Rating
                            style={{ maxWidth: 150 }}
                            value={review.rating}
                            readOnly
                            className='mx-auto'
                        />
                        <img className='mx-auto h-16 w-16' src="https://img.icons8.com/?size=50&id=38968&format=png" alt="" />
                        <p className='text-sm'>{review.details}</p>
                        <h3 className="text-xl uppercase font-mediam text-yellow-600">{review.name}</h3>

                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default Testimonials;