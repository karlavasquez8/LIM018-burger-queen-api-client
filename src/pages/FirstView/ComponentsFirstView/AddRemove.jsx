import React,{useEffect, useState}from 'react'

function AddRemove() {
const [contadorState, setContadorState] = useState(0);
    const [decrementCounter, setDecrementCounter] = useState(0);

    useEffect(() => {
        console.log('Hola soy un componente');
        }, [decrementCounter])

        const handleDecrement = () =>{
            console.log('decrementando...')
            setDecrementCounter(decrementCounter+1);
            setContadorState(contadorState-1);
        }

    const handleIncrement = () =>{
        console.log('incrementando...')
        setContadorState(contadorState+1);
    }
    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <h4>{contadorState}</h4>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}

export default AddRemove