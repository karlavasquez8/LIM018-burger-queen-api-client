import React, { useEffect, useState } from 'react'
import trash from '../../../img/trash.png';

function AddRemove({ onChange = () => { }, productName, price }) {
    const [contadorState, setContadorState] = useState(1);

    useEffect(() => {
        console.log('Hola soy un componente');
        onChange(contadorState)
    }, [contadorState])

    const handleDecrement = () => {
        console.log('decrementando...')
        setContadorState(contadorState - 1);
    }

    const handleIncrement = () => {
        console.log('incrementando...')
        setContadorState(contadorState + 1);
    }
    return (
        <div className="container-products-order">
            <span> {productName}</span>
            <div className='btn-max-min'>
                <button onClick={handleDecrement} disabled={contadorState === 1} >-</button>
                <h4>{contadorState}</h4>
                <button onClick={handleIncrement}>+</button>
            </div>
            <span> S/.{price * contadorState} </span>
            <div>
                <button >
                    <img className="trash" src={trash} alt="trash" />
                </button>
            </div>

        </div>

    )
}

export default AddRemove