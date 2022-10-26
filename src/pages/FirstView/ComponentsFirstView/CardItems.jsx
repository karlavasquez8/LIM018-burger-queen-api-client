import React from 'react';

function CardItems({ name, price, img }) {
    return (
        <section className='info-items'>
            <div className="img-item-container">
                <img src={img} className="img-item" alt="" />
                <span>{name}</span>
            </div>
            <div className='data-items'>
                <span className='cash-item'>{price}</span>
            </div>
        </section>
    )
}

export default CardItems