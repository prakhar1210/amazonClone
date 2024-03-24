import React from 'react';
// import Image from "../ImageArray/ImageArray";
import "./FourImageCard.css";


const FourImageCard = ({ data }) => {

    return (
        <div className='fourImageCardMainContainer'>
            <ProductCard details={data.first} />
            <ProductCard details={data.second} />
            <ProductCard details={data.first} />
            {/* <ProductCard details={data.second} /> */}
            {/* <ProductCard details={data.third} />
            <ProductCard details={data.fourth} /> */}
        </div>
    )
};

const ProductCard = ({ details }) => {

    return (
        <div className='productCardContainer'>
            <h6 className='productCardContainer-title'>{details.title}</h6>
            <div className='productCardContainer-images'>
                {
                    details.items.map((e) => {
                        return <div className='productCardContainer-images-innerContainer' key={e.id}>
                            <img src={e.src} alt={e.alt} />
                            <div>{e.heading}</div>
                        </div>
                    })
                }
            </div>
        </div>

    )
}

export default FourImageCard
