import React from 'react'
import logo from '../../img/logo.png'
import logoCocinero from '../../img/logo-cocinero.png'


export default function NavHeader() {
    return (
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
    );
}