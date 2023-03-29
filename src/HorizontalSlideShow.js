import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './App.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import slide_image_1 from './assets/images/img_1.jpg';
import slide_image_2 from './assets/images/img_2.jpg';
import slide_image_3 from './assets/images/img_3.jpg';
import slide_image_4 from './assets/images/img_4.jpg';
import slide_image_5 from './assets/images/img_5.jpg';

const data = [
    {   
        id:1,
        value: <li>
            <img src={slide_image_1} alt="slide_image" />
                <div className='content'>Image 1</div>
        </li>  
    },
    {   
        id:2,
        value: <li>
            <img src={slide_image_2} alt="slide_image" />
                <div className='content'>Image 2</div>
        </li>  
    },
    {
        id:3,
        value: <li>
            <img src={slide_image_3} alt="slide_image" />
                <div className='content'>Image 3</div>
        </li>  
    },
    {
        id:4,
        value: <li>
            <img src={slide_image_4} alt="slide_image" />
                <div className='content'>Image 4</div>
        </li>  
    },
    {
        id:5,
        value: <li>
            <img src={slide_image_5} alt="slide_image" />
                <div className='content'>Image 5</div>
        </li>  
    },
]

export const HorizontalSlideShow = () => {
    
    return(
        <div className="container">
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
            >
                <ul>
                {data?.map(item => (
                    <SwiperSlide id={item.id} key={item.id}>
                        {item.value}
                    </SwiperSlide>
                ))}
                </ul>
                <div className="slider-controler">
                <div className="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </div>
                <div className="swiper-button-next slider-arrow">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                </div>
                <div className="swiper-pagination"></div>
                </div>
            </Swiper>
            </div>
    )
}