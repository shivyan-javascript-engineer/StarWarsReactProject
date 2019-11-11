import React, { useState } from 'react';
import styles from './login.module.scss';
import Button from '../../Auxilary/Button/index';

function Login(){
    const [username , setUserName] = useState('');
    const [password , setPassword] = useState('');

    const handleSubmit = event => {
        event.preventDefault();
        alert("submit");
    }

    return  (
        <div className={styles.loginContainer} >
            <div className={styles.loginFormContainer} >
                <form onSubmit={handleSubmit} >
                    <label>Username</label>
                    <br />
                    <input placeholder="Yoda / Darth Vader" type="text" onChange={(e) => setUserName(e.target.value)} value={username} pattern="^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$" required/>
                    <br />
                    <label> Password</label>
                    <br />
                    <input placeholder="Secret Code" type="password" onChange={ (e) => setPassword(e.target.value)} value={password} required/>
                    <br />
                    <Button type="submit" label="Login" />
                </form>
            </div>
        </div>
    )
}




export default Login;