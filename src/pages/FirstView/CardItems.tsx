import React from 'react';

interface CardItemsProps {
    name: string;
    img: string;
    price: number;
}

function CardItems({ name, price, img }: CardItemsProps) {
    return (
        <section className='info-items'>
            <div className="img-item">
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