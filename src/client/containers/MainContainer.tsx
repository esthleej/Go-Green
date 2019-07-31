import React from 'react';
import Recycle from '../components/Recycle';

type material = string
function MainContainer() {
  return (
    <div>
      <Recycle material="Glass"/>
      <Recycle material="Plastic"/>
      <Recycle material="Metal"/>
    </div>
  );
}

export default MainContainer;
