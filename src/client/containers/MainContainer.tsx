import React from 'react';
import Recycle from '../components/Recycle';
import styled from 'styled-components'

type material = string;
const MainContainer = (props: any) => {
  return (
    <MainContainerStyled>
      Recycling Categories:
      <Recycle materialInfo={props.type.glass} material="Glass" handleAdd={props.handleAdd} 
              handleDelete={props.handleDelete} handlePayment={props.handlePayment}/>
      <Recycle materialInfo={props.type.metal} material="Metal" handleAdd={props.handleAdd} 
              handleDelete={props.handleDelete} handlePayment={props.handlePayment}/>
      <Recycle materialInfo={props.type.plastic} material="Plastic" handleAdd={props.handleAdd} 
              handleDelete={props.handleDelete} handlePayment={props.handlePayment}/>
    </MainContainerStyled>
  );
};

export default MainContainer;

const MainContainerStyled = styled.div`
  border: 2px solid red
`
