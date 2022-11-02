import React from 'react';

function CardItems({ name, price, img }) {
    return (
        <button className='info-items'>
            <div className="img-item-container">
                <img src={img} className="img-item" alt="" loading="lazy" />
                <span>{name}</span>
            </div>
            <div className='data-items'>
                <span className='cash-item'>{price}</span>
            </div>
        </button>
    )
}

export default CardItems