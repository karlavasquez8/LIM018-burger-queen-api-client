import React, { useEffect, useState } from 'react'
import trash from '../../../img/trash.png';

interface ItemOrderProps {
    onChange: (contador: number, id: number) => void;
    productName: string;
    price: number;
    id: number;
}

function ItemOrder(props: ItemOrderProps) {
    const { onChange = () => { }, productName, price, id } = props;
    const [contadorState, setContadorState] = useState(1);

    const handleDecrement = () => {
        const decrement = contadorState - 1
        setContadorState(decrement);
        onChange(decrement, id)
    }

    const handleIncrement = () => {
        const increment = contadorState + 1
        setContadorState(increment);
        onChange(increment, id)
    }
    return (
        <div className="container-products-order">
            <span className='style-order order-product-name'> {productName}</span>
            <div className='btn-counter'>
                <button className='btn-max-min' onClick={handleDecrement} disabled={contadorState === 1} >-</button>
                <h4>{contadorState}</h4>
                <button className='btn-max-min' onClick={handleIncrement}>+</button>
            </div>
            <span className='style-order'> S/.{price * contadorState} </span>
            <div>
                <button className="btn-trash" >
                    <img className="trash style-order" src={trash} alt="trash" />
                </button>
            </div>

        </div>

    )
}

export default ItemOrder