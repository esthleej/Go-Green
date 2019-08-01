import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { RouteComponentProps } from 'react-router-dom';

function NavBar() {
  return (
    <NavBarStyled>
      <Link to={`/`}>
        <LogoStyled>Go Green</LogoStyled>
      </Link>
      <Link to='/loginpage'>
        <ButtonStyled>Sign In</ButtonStyled>
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
