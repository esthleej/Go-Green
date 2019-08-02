import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { RouteComponentProps } from 'react-router-dom';

const NavBar = (props: any) => {
  let signedIn = 'Sign In'
  if (props.isSignedIn === true) {
    signedIn = 'Log Out'
  }
  return (
    <NavBarStyled>
      <Link to={`/`} style={{textDecoration:'none', color:'#4d4848', margin: '8px'}}>
        GoGreen
      </Link>
      <Link to='/loginpage' style={{textDecoration:'none', color:'#4d4848'}}>
        <ButtonStyled onClick={
          e => {
            if (signedIn === 'Log Out') {
              e.preventDefault();
              fetch('/logout');
            }
          }
        }>{signedIn}</ButtonStyled>
      </Link>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 4vh;
  background-color: #5cbb5cd1;
`;
const ButtonStyled = styled.div`
  text-decoration: none;
  margin: 8px;
`;

const LogoStyled = styled.div`
  text-decoration: none;
  margin: 8px;
`;
export default NavBar;
