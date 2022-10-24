import logo from '../../img/logo.png'
import logoCocinero from '../../img/logo-cocinero.png'
import './firstView.css'
import CardItems from './CardItems'
import React, {useEffect, useState} from 'react'


const [contadorState, setContadorState] = useState(0);

const [decrementCounter, setDecrementCounter] = useState(0);

  useEffect(() => {
    console.log('Hola soy un componente');
    }, [decrementCounter])

//   const handleDecrement = () => {
//     console.log(event.target);
//     console.log(event.currentTarget);
//   };
//  =>{
//     console.log('decrementando...')
//     setDecrementCounter(decrementCounter+1);
//     setContadorState(contadorState-1);
//   }

  const handleIncrement = () =>{
    console.log('incrementando...')
    setContadorState(contadorState+1);
  }


function FirstView() {
    return (
        <div className="FirstView">
            <header className="FirstView-header">
                <div className='FirstView-nav'>
                    <div className='Logo-nav'>
                        <img src={logo} className="FirstView-logo-nav" alt="logo-nav" />
                    </div>

                    <div className='Option-nav'>
                        <div>
                            <button className="Home-btn"> Menú </button>
                            <button className="Home-btn"> Ordenes </button>
                        </div>
                        <img src={logoCocinero} className="Logo-cocinero" alt="logo" />
                    </div>
                </div>
            </header>
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
                                        <h4>{contadorState}</h4>
                                        <br />
                                        {/* <button onClick={handleDecrement}>-</button> */}
                                        <button onClick={event => console.log(event)}>+</button>
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
