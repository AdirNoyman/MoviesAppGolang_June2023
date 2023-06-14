import React, { useState } from 'react';
import Input from './form/Input.js';
import { useNavigate, useOutletContext } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { setJwtToken } = useOutletContext();
  const { setAlertMessage: setMessage } = useOutletContext();
  const { setAlertClassName: setClassName } = useOutletContext();

  const navigate = useNavigate();

  const handleSubmmit = (e) => {
    e.preventDefault();

    if (email === 'admin@example.com') {
      setJwtToken('abc123');
      setClassName('d-none');
      setMessage('');
      // redirect to home page
      navigate('/');
    } else {
      setClassName('alert-danger');
      setMessage('Invalid credentials');
    }
  };

  return (
    <div className="col-md-6 offset-md-3">
      <h2>Login</h2>
      <hr />
      <form onSubmit={handleSubmmit}>
        <Input
          title="Email Address"
          type="email"
          className="form-control"
          name="email"
          autoComplete="email-new"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          title="Password"
          type="password"
          className="form-control"
          name="password"
          autoComplete="password-new"
          onChange={(e) => setPassword(e.target.value)}
        />
        <hr />
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
