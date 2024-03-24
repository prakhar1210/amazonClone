import React from 'react'
import TodaysDealCard from './TodaysDealCard';
import style from "./TodaysDeal.module.css"

const TodaysDeal = () => {
    return (
        <div className={style.TodaysDealOuterContainer}>
            <div className={style.TodaysDealContainer}>
                <div className={style.TodaysDealTitleContainer}>
                    <h2>Today's Deal </h2>
                    <p>See all deals</p>
                </div>
                <TodaysDealCard />
            </div>


        </div>
    )
}

export default TodaysDeal
