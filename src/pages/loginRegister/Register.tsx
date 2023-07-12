import React, { useState } from 'react';
function RegistrationPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
      };
      
      const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
      };

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Perform registration logic here
        console.log('Username:', username);
        console.log('Password:', password);
    };

    return (
        <div style={{paddingTop:'20%'}}>
            <h2>Registration Page</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
}

export default RegistrationPage;
