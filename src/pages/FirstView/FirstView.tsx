import logo from 'img/logo.png'
import logoCocinero from 'img/logo-cocinero.png'
import './firstView.css'
import CardItems from './CardItems'

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
                                <div className='square-btn'>
                                    <button className="Login-btn"> Hamburguesas </button>
                                    <button className="Login-btn"> Acompañamientos </button>
                                    <button className="Login-btn"> Para tomar </button>
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
