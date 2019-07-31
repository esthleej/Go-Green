import React from 'react';
import Recycle from '../components/Recycle';
import styled from 'styled-components'

type material = string;
const MainContainer = (props: any) => {
  return (
    <MainContainerStyled>
      Recycling Categories:
      <Recycle materialInfo={props.type.glass} material="Glass" />
      <Recycle materialInfo={props.type.metal} material="Plastic" />
      <Recycle materialInfo={props.type.plastic} material="Metal" />
    </MainContainerStyled>
  );
};

export default MainContainer;

const MainContainerStyled = styled.div`
  border: 2px solid red
`
