import React from 'react';
import Recycle from '../components/Recycle';

type material = string;
const MainContainer = (props: any) => {
  return (
    <div>
      Recycling Categories:
      <Recycle materialInfo={props.type.glass} material="Glass" />
      <Recycle materialInfo={props.type.metal} material="Plastic" />
      <Recycle materialInfo={props.type.plastic} material="Metal" />
    </div>
  );
};

export default MainContainer;
