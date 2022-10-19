/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from 'img/logo.png'
import './login.css'



// const data = {
// 	"email": "mesera5@gmail.com",
// 	"password": "laloca123"
// }

function Login() {
    const navigate = useNavigate()
    const API_URL = "http://localhost:3001";
    const authPath = "/auth";
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();

    //Capturamos el error
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event: any) => {
        event.preventDefault();
        localStorage.clear();

        if (email === "" || password === "") {
            alert('Complete todos los campos');
        } else {
            /* console.log(data) */
            fetch(`${API_URL}${authPath}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    password,
                    email
                }) // convierte js a json
            })
                .then((res) => {
                    /* console.log(res.status); */
                    if (res.status === 200) {
                        navigate("/menu");
                    }
                    return res.json()
                })
                .then((resp) => {
                    /* console.log(resp, 'token'); */
                    localStorage.setItem("token", resp.token)
                })
                .catch(err => {
                    // alert('usuario no registrado');
                    setErrorMessage('Usuario no registrado, revise su correo o contraseña');
                    setTimeout(() => {
                        setErrorMessage('');
                    }, 4000);
                });
        }
    }

    // fetch(`${API_URL}${authPath}`, {
    //     method: "POST",
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify(data) // convierte js a json
    // })
    //     .then(response => response.json())
    //     console.log
    //     .then(data => console.log(data));

    return (
        <div className="Login">
            <header className="Login-header">
                <div className='Login-conten'>
                    <img src={logo} className="Login-logo" alt="logo" />
                </div>
                <div className="Container-form">
                    <h1> LET'S START </h1>
                    <form className='Login-form' onSubmit={handleSubmit}>
                        <p> Correo </p>
                        <input name="email" type="email" id="inputEmail" className="Login-input" placeholder="E-mail"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <p> Contraseña</p>
                        <input name="password" type="password" id="inputPassword" className="Login-input" placeholder="Contraseña"
                            onChange={(event) => setPassword(event.target.value)}
                        />
                        <button type="submit" className="Login-btn"> Iniciar sesión </button>
                    </form>
                </div>
            </header>
        </div>
    );
}

export default Login;
