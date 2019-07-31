import React from 'react';
import styled from 'styled-components'
// import { RouteComponentProps } from 'react-router-dom';

function NavBar() {
  return (
    <NavBarStyled>
      <LogoStyled>Go Green</LogoStyled>
      <ButtonStyled>Sign In</ButtonStyled>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.div`
  display:flex;
  justify-content: space-between;
  border: 2px solid green
`
const ButtonStyled = styled.button`
`

const LogoStyled = styled.div`

`
export default NavBar;
