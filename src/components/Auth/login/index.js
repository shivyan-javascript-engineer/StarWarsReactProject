import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './login.module.scss';
import Button from '../../Auxilary/Button/index';
import { loginAPI } from '../../store/actions/index';

function Login(props) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    props.loginAPI();
  };


  useEffect(() => {
    props.loginAPI();
  }, []);


  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginFormContainer}>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <br />
          <input placeholder="Yoda / Darth Vader" type="text" onChange={(e) => setUserName(e.target.value)} value={username} required />
          <br />
          <label> Password</label>
          <br />
          <input placeholder="Secret Code" type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
          <br />
          <Button
            style={{
              display: 'flex',
              alignSelf: 'center',
              margin: '16px auto',
            }}
            type="submit"
            label="Login"
          />
        </form>
      </div>
    </div>
  );
}


Login.propTypes = {
  loginAPI: PropTypes.func.isRequired,
};


export default connect(null, { loginAPI })(Login);
