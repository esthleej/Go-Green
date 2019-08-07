import React, { useRef } from 'react';
import { Button } from 'antd';
import styled from 'styled-components';

const Login = () => {
  const usernameLogin = useRef(null);
  const passwordLogin = useRef(null);
  const usernameSignup = useRef(null);
  const passwordSignup = useRef(null);

  const handleLogin = () => {
    const username = usernameLogin.current.value;
    const password = passwordLogin.current.value;
    if (username !== '' && password !== '') {
      fetch('/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      })
        .then(res => res.json())
        .then(data => {
          if (data === 'user verified') {
            console.log('u logged in');
          } else {
            console.log('u DIDNT loggigng in');
          }
        })
        .catch(err => {
          console.log('u DIDNTS loggigng in');
        });
    }
  };

  const handleSignup = () => {
    const password = passwordSignup.current.value;
    const username = usernameSignup.current.value;
    if (username !== '' && password !== '') {
      fetch('/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          password
        })
      })
        .then(res => res.json())
        .then(data => {
          console.log('u signed up');
        })
        .catch(err => {
          console.log('u didnt signed up');
        });
    }
  };

  return (
    <LoginStyled>
      <Stuff>
        Welcome to GoGreen!
        <div>
          <input type="text" placeholder="username" ref={usernameLogin} />
          <input type="password" placeholder="password" ref={passwordLogin} />
          <Button onClick={handleLogin}>log in</Button>
        </div>
        <div>
          <input type="text" placeholder="username" ref={usernameSignup} />
          <input type="password" placeholder="password" ref={passwordSignup} />
          <Button onClick={handleSignup}>sign up</Button>
        </div>
      </Stuff>
    </LoginStyled>
  );
};

const LoginStyled = styled.div`
  width: 100%;
  display: -webkit-box;
  -webkit-box-pack: center;
`;

const Stuff = styled.div`
  flex-direction: column;
`;
export default Login;
