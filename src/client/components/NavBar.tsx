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
      <Link to={`/`}>
        <LogoStyled>Go Green</LogoStyled>
      </Link>
      <Link to='/loginpage'>
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
  background-color: #3ca73c;
`;
const ButtonStyled = styled.button``;

const LogoStyled = styled.button`
  text-decoration: none !important;
`;
export default NavBar;
