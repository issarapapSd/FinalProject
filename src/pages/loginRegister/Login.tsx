import React, { useState } from 'react';
import { Link } from 'react-router-dom';
interface LoginFormProps {
    onLogin: (username: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (username === 'admin' && password === 'password') {
            onLogin(username,password);
        }
        else{
            alert('ผิด')
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{paddingTop:'20%'}}>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Login</button>

            <Link type="button" to='/register' >Register</Link>
        </form>
    );
};

export default LoginForm;