import React from 'react';
import style from "./BestSellingCard.module.css";

const images = [
    "https://m.media-amazon.com/images/I/81QwmxrbgwL._AC_SY200_.jpg",
    " https://m.media-amazon.com/images/I/71VJeH76FCL._AC_SY200_.jpg",
    " https://m.media-amazon.com/images/I/71iLhBB-WmL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/71JfqFSkZfL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/517er3i6s6L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/81r0JyulzDL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/517uKaakj3L._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/61up30vSPHL._AC_SY200_.jpg",
    "https://m.media-amazon.com/images/I/713n1fmP3UL._AC_SY200_.jpg",
    // "https://m.media-amazon.com/images/I/714T-9deP-L._AC_SY200_.jpg",
    // "https://m.media-amazon.com/images/I/61LpFoEO0gL._AC_SY200_.jpg",
]

const BestSellingCard = () => {
    return (
        <div>
            <h2> BestSelling Kitchen Products | Amazon Brands and more</h2>
            <div className={style.BestSellingCardMainContainer}>
                {/* Map through the array of images and render each one */}
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`home_appliances_image_${index}`}
                        className="best-selling-image"
                    />
                ))}
            </div>
        </div>

    )
}

export default BestSellingCard
// import React, { useEffect } from 'react';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';


// import style from "./BestSellingCard.module.css";

// const images = [
//     "https://m.media-amazon.com/images/I/81QwmxrbgwL._AC_SY200_.jpg",
//     "https://m.media-amazon.com/images/I/71VJeH76FCL._AC_SY200_.jpg",
//     "https://m.media-amazon.com/images/I/71iLhBB-WmL._AC_SY200_.jpg",
//     "https://m.media-amazon.com/images/I/71JfqFSkZfL._AC_SY200_.jpg",
//     "https://m.media-amazon.com/images/I/517er3i6s6L._AC_SY200_.jpg",
//     "https://m.media-amazon.com/images/I/81r0JyulzDL._AC_SY200_.jpg",
//     "https://m.media-amazon.com/images/I/517uKaakj3L._AC_SY200_.jpg",
//     "https://m.media-amazon.com/images/I/61up30vSPHL._AC_SY200_.jpg",
//     "https://m.media-amazon.com/images/I/713n1fmP3UL._AC_SY200_.jpg",
//     "https://m.media-amazon.com/images/I/714T-9deP-L._AC_SY200_.jpg",
//     "https://m.media-amazon.com/images/I/61LpFoEO0gL._AC_SY200_.jpg",
// ];

// const BestSellingCard = () => {
//     useEffect(() => {
//         const swiper = new Swiper('.swiper-container', {
//             // Optional parameters
//             direction: 'horizontal',
//             loop: true,

//             // If you need pagination
//             pagination: {
//                 el: '.swiper-pagination',
//             },

//             // Navigation arrows
//             navigation: {
//                 nextEl: '.swiper-button-next',
//                 prevEl: '.swiper-button-prev',
//             },

//             // And if we need scrollbar
//             scrollbar: {
//                 el: '.swiper-scrollbar',
//             },
//         });

//         return () => {
//             swiper.destroy(true, true);
//         };
//     }, []);

//     return (
//         <div className={style.bestSellingCardContainer}>
//             <h2>Best Selling Kitchen Products | Amazon Brands and more</h2>
//             <div className="swiper-container">
//                 <div className="swiper-wrapper">
//                     {images.map((image, index) => (
//                         <div key={index} className="swiper-slide">
//                             <img
//                                 src={image}
//                                 alt={`home_appliances_image_${index}`}
//                                 className={style.bestSellingImage}
//                             />
//                         </div>
//                     ))}
//                 </div>
//                 {/* If you need pagination */}
//                 <div className="swiper-pagination"></div>

//                 {/* If you need navigation buttons */}
//                 <div className="swiper-button-prev"></div>
//                 <div className="swiper-button-next"></div>

//                 {/* If you need scrollbar */}
//                 <div className="swiper-scrollbar"></div>
//             </div>
//         </div>
//     );
// }

// export default BestSellingCard;

