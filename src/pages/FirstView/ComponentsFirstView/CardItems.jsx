import React from 'react';

function CardItems({ name, price, img, onAddButtonClick, id }) {
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