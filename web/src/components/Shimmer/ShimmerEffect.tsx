import React, { FC } from 'react';
import './Shimmer.style.css'

type Props = {
    type: String
};

const ShimmerEffect: FC<Props> = ( props ) => {

    return (
        <div>
            <div className="shimmer title1" style={{ display: props.type === 'title' ? 'block' : 'none' }} ></div>
            <div className="shimmer line" style={{ display: props.type === 'line' ? 'block' : 'none' }} ></div>
            <div className="shimmer square" style={{ display: props.type === 'square' ? 'block' : 'none' }} ></div>
            <div className="shimmer circle" style={{ display: props.type === 'circle' ? 'block' : 'none' }} ></div>
            <div className="shimmer seminar-square" style={{ display: props.type === 'seminar-square' ? 'block' : 'none' }} ></div>
        </div>
    )
}

export default ShimmerEffect;

