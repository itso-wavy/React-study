import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 2em;
  border-radius: 10px;
  box-shadow: 1px 3px 0.5em 1px lightgrey;
  gap: 1em;

  & div {
    width: 100%;
    display: flex;
    flex-direction: column;
    font-weight: bolder;
    gap: 0.5em;
  }

  & button {
    border: none;
    padding: 0.5em 2em;
    border-radius: 30px;
    font-size: 1.5em;
    background-color: #c0c0c0;

    &:hover {
      outline: 3px solid #a0e2f7;
    }

    &:focus {
      background-color: #bfe4f0;
      outline: 3px solid #bfe4f0;
    }
  }
`;
const StyledInput = styled.input`
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 0.5em;
  outline: none;
  background-color: ${props => (props.isValid ? 'white' : '#fde6fb')};
  border: 1px solid ${props => (props.isValid ? 'black' : '#ff66ad')};

  &:focus {
    border: 1px solid ${props => (props.isValid ? 'black' : '#ff66ad')};
  }
`;

const LoginForm = ({ setIsLogin }) => {
  const [userinfo, setUserinfo] = useState({
    email: '',
    password: '',
  });
  const [isValid, setIsValid] = useState({
    email: true,
    password: true,
  });

  const handleUserInfo = e => {
    setUserinfo(userinfo => {
      return { ...userinfo, [e.target.name]: e.target.value };
    });
    handleValidate(e);
  };
  const handleValidate = e => {
    if (e.target.name === 'email') {
      setIsValid({ ...isValid, [e.target.name]: e.target.value.includes('@') });
    }
    if (e.target.name === 'password') {
      setIsValid({ ...isValid, [e.target.name]: e.target.value.length >= 6 });
    }
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    if (isValid.email && isValid.password) setIsLogin(true);
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor='email'>E-Mail</label>
        <StyledInput
          id='email'
          name='email'
          type='text'
          value={userinfo.email}
          onChange={handleUserInfo}
          isValid={isValid.email}
        />
      </div>
      <div>
        <label htmlFor='pw'>Password</label>
        <StyledInput
          id='pw'
          name='password'
          type='text'
          value={userinfo.password}
          onChange={handleUserInfo}
          isValid={isValid.password}
        />
      </div>
      <button>Login</button>
    </StyledForm>
  );
};

export default LoginForm;
