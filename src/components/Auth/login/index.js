import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import styles from './login.module.scss';
import Button from '../../Auxilary/Button/index';
import { loginAPI } from '../../store/actions/index';

function Login(props) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorLogging, setErrorLogging] = useState(false);
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    props.loginAPI(username, password, history.push, setLoading, setErrorLogging);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginFormContainer}>
        <form onSubmit={handleSubmit}>
          <p>{errorLogging && 'Username or Password incorrect!'}</p>
          <label>Username</label>

          <br />
          <input placeholder="Yoda / Darth Vader" type="text" onChange={(e) => setUserName(e.target.value)} value={username} required />
          <br />
          <label> Password</label>
          <br />
          <input placeholder="Secret Code" type="password" onChange={(e) => setPassword(e.target.value)} value={password} required />
          <br />
          <Button
            loading={loading}
            style={{
              display: 'flex',
              alignSelf: 'center',
              margin: '16px auto',
              // background: errorLogging ? 'red' : '#1f395a',
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
