import React, {useRef} from 'react'

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
          username, password
        })
      })
      .then(res => res.json())
      .then(data => {
        if (data === 'user verified') {
          console.log('u logged in')
        } else {
          console.log('u DIDNT loggigng in')
        }
      })
      .catch(err => {
        console.log('u DIDNTS loggigng in')
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
          username, password
        })
      })
      .then(res => res.json())
      .then(data => {
        console.log('u signed up')
      })
      .catch(err => {
        console.log('u didnt signed up')
      });
    }
  };

  return (
    <div>
      <button onClick={handleLogin}>log in</button>
      <br />
      <input type="text" placeholder="username" ref={usernameLogin}></input>
      <input type="text" placeholder="password" ref={passwordLogin}></input>
      <br />
      <button onClick={handleSignup}>sign up</button>
      <br />
      <input type="text" placeholder="username" ref={usernameSignup}></input>
      <input type="text" placeholder="password" ref={passwordSignup}></input>
    </div>
  )
};

export default Login;
