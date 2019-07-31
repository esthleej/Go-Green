import React from 'react';
import styled from 'styled-components'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainContainer from './MainContainer';
import Header from '../components/Header'

const UserContainer = (props: any) => {
  return (
    <UserContainerStyled>
        <div>
          <Header type={props.type}/>
          <MainContainer type={props.type} />
        </div>
    </UserContainerStyled>
  );
};

export default UserContainer;

const UserContainerStyled = styled.div`
border: 2px solid yellow
`
