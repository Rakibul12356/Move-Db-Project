import React from 'react';
import star from '../assets/star.svg'
const Rating = ({value}) => {
    const stars = Array(value).fill(star);
    return (
        <>
            {
                stars.map((star,index)=>(
                     <img key={index} src={star} width="14" height="14" alt="" />
                ))
            }
        </>
    );
};

export default Rating;