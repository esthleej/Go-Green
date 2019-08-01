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
  justify-content: space-between;
  border: 2px solid green;
`;
const ButtonStyled = styled.button``;

const LogoStyled = styled.button`
  text-decoration: none !important;
`;
export default NavBar;
