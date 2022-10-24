
import React from 'react'
import './firstView.css'
import CardItems from './CardItems'
import NavHeader from '../Components/NavHeader'
import AddRemove from './AddRemove';


function FirstView() {
    
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
                                        <AddRemove/>
                                        <AddRemove/>
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
