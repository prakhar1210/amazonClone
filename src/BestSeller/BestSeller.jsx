import React from 'react';

import style from "./BestSeller.module.css";
import BestSellingCard from './BestSellingCard';

const BestSeller = () => {
    return (
        <div className={style.bestSellerMainContainer}>
            <BestSellingCard />
        </div>
    )
}

export default BestSeller
