import React, { useState } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  width: 90%;
  margin: 1em auto;
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

  & input {
    border-radius: 5px;
    border: 1px solid lightgray;
    padding: 0.5em;
    outline: none;

    &:focus {
      border: 1px solid black;
      background-color: ${props => {
        props.isValid ? 'pink' : 'red';
      }};
    }
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

const LoginForm = () => {
  const [isValid, setIsValid] = useState(false);
  const [userinfo, setUserinfo] = useState({
    email: '',
    password: '',
  });
  const handleUserEmail = e => {
    setUserinfo(userinfo => {
      return { ...userinfo, email: e.target.value };
    });
  };
  const handleUserPassword = e => {
    setUserinfo(userinfo => {
      return { ...userinfo, password: e.target.value };
    });
  };
  const handleFormSubmit = e => {
    e.preventDefault();
    console.log(userinfo);
  };

  return (
    <StyledForm onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor='email'>E-Mail</label>
        <input
          id='email'
          type='text'
          value={userinfo.email}
          onChange={handleUserEmail}
        />
      </div>
      <div>
        <label htmlFor='pw'>Password</label>
        <input
          id='pw'
          type='text'
          value={userinfo.password}
          onChange={handleUserPassword}
        />
      </div>
      <button>Login</button>
    </StyledForm>
  );
};

export default LoginForm;
