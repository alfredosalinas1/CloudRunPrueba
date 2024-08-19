import React, { useState } from 'react';

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes añadir la lógica de autenticación
        if (username === 'admin' && password === '123') {
            onLogin(true);
        } else {
            alert('Credenciales incorrectas');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <form onSubmit={handleSubmit} className="border p-4 shadow">
                <h2 className="text-center mb-4">Login</h2>
                <div className="form-group mb-3">
                    <label>Usuario</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="form-group mb-3">
                    <label>Contraseña</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="btn btn-primary w-100">Ingresar</button>
            </form>
        </div>
    );
};

export default Login;
