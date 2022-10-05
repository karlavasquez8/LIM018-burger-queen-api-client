import logo from 'img/logo.png'
import logoCocinero from 'img/logo-cocinero.png'
import hamburguesaprueba from 'img/hamburguesaprueba.png'
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
                        <button className="Login-btn"> Menú </button>
                        <button className="Login-btn"> Ordenes </button>
                        <img src={logoCocinero} className="Logo-cocinero" alt="logo" />
                    </div>
                </div>
            </header>
            <main>
                <div className="wallpaper ">
                    <div className="wrap-container">
                        <div className="container-menu">
                            <div className='items'>
                                <div className='encabezado-items'>
                                    <button className="Login-btn"> Desayuno </button>
                                    <button className="Login-btn"> Almuerzo y Cena </button>
                                </div>
                                <section className='info-items'>
                                    <div className="img-item">
                                        <img src={hamburguesaprueba} className="item" alt="" />
                                    </div>
                                    <div className='data-items'>
                                        <span>Sandwich de jamon y queso </span>
                                        <span>$10</span>
                                    </div>


                                </section>
                            </div>
                            <div className='pedido'>

                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default FirstView;
