import React from 'react';
import styled from 'styled-components';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainContainer from './MainContainer';
import Header from '../components/Header';

const UserContainer = (props: any) => {
  return (
    <UserContainerStyled>
      <div>
        <Header type={props.type} handleRecycle={props.handleRecycle} isSignedIn={props.isSignedIn}/>
        <MainContainer
          type={props.type}
          handleAdd={props.handleAdd}
          handleDelete={props.handleDelete}
          handlePayment={props.handlePayment}
        />
      </div>
    </UserContainerStyled>
  );
};

export default UserContainer;

const UserContainerStyled = styled.div`
  border: 2px solid yellow;
`;
