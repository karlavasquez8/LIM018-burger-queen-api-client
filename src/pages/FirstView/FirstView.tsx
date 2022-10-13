import logo from 'img/logo.png'
import logoCocinero from 'img/logo-cocinero.png'
import hamburguesaprueba from 'img/hamburguesaprueba.png'
import cafe from 'img/cafe.png'
import cafeconleche from 'img/cafeconleche.png'
import sandwich_panino from 'img/SANDWICH_PANINO.png'
import jugo from 'img/jugo.png'
import hambursimple from 'img/hambur-simple.png'
import hamburdoble from 'img/hambur-doble.png'
import papas from 'img/papitas.png'
import cebolla from 'img/cebollas.png'
import gaseosa500 from 'img/gaseosa-500.png'
import gaseosa750 from 'img/gaseosa-750.png'
import agua500 from 'img/agua-500.png'
import agua750 from 'img/agua-750.png'
import './firstView.css'

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
                            <button className="Login-btn"> Menú </button>
                            <button className="Login-btn"> Ordenes </button>
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
                                    <button className="Login-btn"> Desayuno </button>
                                    <button className="Login-btn"> Almuerzo y Cena </button>
                                </div>
                                    <div className='fondo-items'>
                                        <section className='info-items'>
                                            <div className="img-item">
                                                <img src={cafe} className="img-item" alt="" />
                                                <span>Cáfe </span>
                                            </div>
                                            <div className='data-items'>
                                                <span className='cash-item'>$5</span>
                                            </div>
                                        </section>
                                        <section className='info-items'>
                                            <div className="img-item">
                                                <img src={cafeconleche} className="img-item" alt="" />
                                                <span>Cafe con Leche </span>
                                            </div>
                                            <div className='data-items'>
                                                <span className='cash-item'>$7</span>
                                            </div>
                                        </section>
                                        <section className='info-items'>
                                            <div className="img-item">
                                                <img src={sandwich_panino} className="img-item" alt="" />
                                                <span>Sandwich de jamon y queso </span>
                                            </div>
                                            <div className='data-items'>
                                                <span className='cash-item'>$10</span>
                                            </div>
                                        </section>
                                        <section className='info-items'>
                                            <div className="img-item">
                                                <img src={jugo} className="img-item" alt="" />
                                                <span>Jugo Natural </span>
                                            </div>
                                            <div className='data-items'>
                                                <span className='cash-item'>$7</span>
                                            </div>
                                        </section>
                                    </div>
                                    <div className='fondo-items'>
                                        <section className='info-items'>
                                            <div className="img-item">
                                                <img src={papas} className="img-item" alt="" />
                                                <span>Papas Fritas </span>
                                            </div>
                                            <div className='data-items'>
                                                <span className='cash-item'>$5</span>
                                            </div>
                                        </section>
                                        <section className='info-items'>
                                            <div className="img-item">
                                                <img src={cebolla} className="img-item" alt="" />
                                                <span>Aros de Cebolla</span>
                                            </div>
                                            <div className='data-items'>
                                                <span className='cash-item'>$5</span>
                                            </div>
                                        </section>
                                        <section className='info-items'>
                                            <div className="img-item">
                                                <img src={hambursimple} className="img-item" alt="" />
                                                <span>Hamburguesa Simple </span>
                                            </div>
                                            <div className='data-items'>
                                                <span className='cash-item'>$10</span>
                                            </div>
                                        </section>
                                        <section className='info-items'>
                                            <div className="img-item">
                                                <img src={hamburdoble} className="img-item" alt="" />
                                                <span>Hamburguesa Doble</span>
                                            </div>
                                            <div className='data-items'>
                                                <span className='cash-item'>$15</span>
                                            </div>
                                        </section>
                                    </div>
                                    <div className='fondo-items'>
                                        <section className='info-items'>
                                            <div className="img-item">
                                                <img src={gaseosa500} className="img-item" alt="" />
                                                <span> Bebida/Gaseosa 500 ml</span>
                                            </div>
                                            <div className='data-items'>
                                                <span className='cash-item'>$7</span>
                                            </div>
                                        </section>
                                        <section className='info-items'>
                                            <div className="img-item">
                                                <img src={gaseosa750} className="img-item" alt="" />
                                                <span>Bebida/Gaseosa 750 ml</span>
                                            </div>
                                            <div className='data-items'>
                                                <span className='cash-item'>$10</span>
                                            </div>
                                        </section>
                                        <section className='info-items'>
                                            <div className="img-item">
                                                <img src={agua500} className="img-item" alt="" />
                                                <span>Agua de 500ml</span>
                                            </div>
                                            <div className='data-items'>
                                                <span className='cash-item'>$5</span>
                                            </div>
                                        </section>
                                        <section className='info-items'>
                                            <div className="img-item">
                                                <img src={agua750} className="img-item" alt="" />
                                                <span>Agua de 750ml</span>
                                            </div>
                                            <div className='data-items'>
                                                <span className='cash-item'>$7</span>
                                            </div>
                                        </section>
                                    </div>
                            </div>
                            <div className='items'>
                                <section>
                                    <div>
                                        <span> CLIENTE:</span>
                                        <span> nombre del cliente</span>
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
