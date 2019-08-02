import React from 'react';
import Recycle from '../components/Recycle';
import styled from 'styled-components'

type material = string;
const MainContainer = (props: any) => {
  return (
    <MainContainerStyled>
      <TitleCategoryStyled>
      Recycling Categories:
      </TitleCategoryStyled>
      <Recycle materialInfo={props.type.glass} material="Glass" handleAdd={props.handleAdd} 
              handleDelete={props.handleDelete}/>
      <Recycle materialInfo={props.type.metal} material="Metal" handleAdd={props.handleAdd} 
              handleDelete={props.handleDelete}/>
      <Recycle materialInfo={props.type.plastic} material="Plastic" handleAdd={props.handleAdd} 
              handleDelete={props.handleDelete}/>
    </MainContainerStyled>
  );
};

export default MainContainer;

const MainContainerStyled = styled.div`
  // border: 2px solid red
`
const TitleCategoryStyled = styled.div`
  margin: 20px;
`
