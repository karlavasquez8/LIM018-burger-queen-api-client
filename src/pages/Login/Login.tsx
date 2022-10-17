import logo from 'img/logo.png'
import './login.css'

const data = {
	"email": "mesera5@gmail.com",
	"password": "laloca123"
}

function Login() {
    const API_URL= "http://localhost:3001";
    const authPath = "/auth";

    fetch(`${API_URL}${authPath}`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data) // convierte js a json
    })
        .then(response => response.json())
        console.log
        .then(data => console.log(data));

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
