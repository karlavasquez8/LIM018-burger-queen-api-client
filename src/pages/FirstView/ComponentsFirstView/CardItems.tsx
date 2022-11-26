import React from 'react';
import { Product } from '../../domain/Products';

interface CardItemsProps {
    name: string;
    price: number;
    img: string;
    id: number;
    onAddButtonClick: (product: Product) => void
}

function CardItems(props: CardItemsProps) {
    const { name, price, img, onAddButtonClick, id } = props
    return (
        <button className='info-items' onClick={() => onAddButtonClick({ name, price, id })}>
            <div className="img-item-container">
                <img src={img} className="img-item" alt="" loading="lazy" />
                <span>{name}</span>
            </div>
            <div className='data-items'>
                <span className='cash-item'>{`S/.${price.toFixed(2)}`}</span>
            </div>
        </button>
    )
}

export default CardItems