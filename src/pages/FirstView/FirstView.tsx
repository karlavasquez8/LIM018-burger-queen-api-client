
import React,{useEffect, useState}from 'react'
import './firstView.css'
import CardItems from './CardItems'
import NavHeader from '../Components/NavHeader'

function FirstView() {
    
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
        <div className="FirstView">
            <NavHeader />
            <main>
                <div className="wallpaper ">
                    <div className="wrap-container">
                        <div className="container-menu">
                            <div className='items'>
                                <div className='square-btn'>
                                    <button className="Menu-btn"> Desayuno </button>
                                    <button className="Menu-btn"> Almuerzo y Cena </button>
                                </div>
                                <div className='fondo-items'>
                                    <CardItems img='' name='' price={7} />

                                </div>
                            </div>
                            <div className='items'>
                                <section>
                                    <div>
                                        <span> CLIENTE:</span>
                                        <span> nombre del cliente</span>
                                        <br />
                                        <button onClick={handleDecrement}>-</button>
                                        <h4>{contadorState}</h4>
                                        <button onClick={handleIncrement}>+</button>
                                        <br />
                                        <button onClick={handleDecrement}>-</button>
                                        <h4>{contadorState}</h4>
                                        <button onClick={handleIncrement}>+</button>
                                        <br />
                                    </div>
                                    <div>
                                        <span> ITEM</span>
                                        <span> CANT</span>
                                        <span> PRECIO</span>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default FirstView;
