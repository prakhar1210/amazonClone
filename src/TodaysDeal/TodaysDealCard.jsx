import React from 'react';
import style from "./TodaysDealCard.module.css";

const todaysDeals = [
    {
        imageUrl: 'https://m.media-amazon.com/images/I/41m-C1HHkIL._AC_SY200_.jpg',
        discount: 'Upto 20% off',
        productName: 'iQOO Z9 5G || Newly Launched @17999'
    },
    {
        imageUrl: 'https://m.media-amazon.com/images/I/41m-C1HHkIL._AC_SY200_.jpg',
        discount: 'Upto 50% off',
        productName: 'iQOO Z8 5G || Newly Launched @17999'
    },
    {
        imageUrl: 'https://m.media-amazon.com/images/I/41m-C1HHkIL._AC_SY200_.jpg',
        discount: 'Upto 40% off',
        productName: 'iQOO Z7 5G || Newly Launched @17999'
    },
    {
        imageUrl: 'https://m.media-amazon.com/images/I/41yAce7gd4L._AC_SY200_.jpg',
        discount: 'Upto 10% off',
        productName: 'iQOO Z6 5G || Newly Launched @17999'
    },
    {
        imageUrl: 'https://m.media-amazon.com/images/I/41tSQSq1xJL._AC_SY200_.jpg',
        discount: 'Upto 27% off',
        productName: 'Starting from 10999 including additional offersStarting from 10999 including...'
    },
    {
        imageUrl: 'https://m.media-amazon.com/images/I/411gvmvNQzL._AC_SY200_.jpg',
        discount: 'Upto 19% off',
        productName: 'iQOO 12 5G || Newly Launched @17999'
    },
    {
        imageUrl: 'https://m.media-amazon.com/images/I/412t8N-6ARL._AC_SY200_.jpg',
        discount: 'Upto 16% off',
        productName: 'Honor 12 5G || Newly Launched @17999'
    },
    {
        imageUrl: 'https://m.media-amazon.com/images/I/411iWoJEJjL._AC_SY200_.jpg',
        discount: 'Upto 22% off',
        productName: 'Redmi 12 5G || Newly Launched @17999'
    },
    {
        imageUrl: 'https://m.media-amazon.com/images/I/41snmTn9mrL._AC_SY200_.jpg',
        discount: 'Upto 26% off',
        productName: 'Newly Launched @17999'
    },
    // Add more items as needed
];

const TodaysDeals = () => {
    return (
        // <div className={style.TodaysDealCardMainConatiner}>
        //     <div className={style.TodaysDealCard}>
        //         <img
        //             src='https://m.media-amazon.com/images/I/41m-C1HHkIL._AC_SY200_.jpg'
        //             alt='phone' />
        //     </div>
        //     <div className={style.banner}>
        //         <div className={style.bannerDiscount}>Upto 20% off</div>
        //         <h6>Limited time deal</h6>
        //     </div>
        //     <h6>iQOO Z9 5G || Newly Launched @17999iQOO Z9 5G || Newly Launched @17999</h6>
        // </div>
        <div className={style.TodaysDealCardMainConatiner}>
            {todaysDeals.map((deal, index) => (
                <div key={index} className={style.TodaysDealCard}>
                    <img
                        src={deal.imageUrl}
                        alt='phone' />
                    <div className={style.banner}>
                        <div className={style.bannerDiscount}>{deal.discount}</div>
                        <h6 >Limited time deal</h6>
                    </div>
                    <h6>{deal.productName}</h6>
                </div>
            ))}
        </div>
    )

}

export default TodaysDeals;
