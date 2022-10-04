import logo from 'img/logo.png'
import './login.css'

function Login() {
    return (
        <div className="Login">
            <header className="Login-header">
                <div className='Login-conten'>
                    <img src={logo} className="Login-logo" alt="logo" />
                </div>
                <div className="Container-form">
                    <h1> LET'S START </h1>
                    <form className='Login-form'>
                        <p> Correo </p>
                        <input name="email" type="email" id="inputEmail" className="Login-input" placeholder="E-mail" ></input>
                        <p> Contraseña</p>
                        <input name="password" type="password" id="inputPassword" className="Login-input" placeholder="Contraseña"></input>
                        <button type="submit" className="Login-btn"> Iniciar sesión </button>
                    </form>
                </div>
            </header>
        </div>
    );
}

export default Login;
