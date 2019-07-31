import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import MainContainer from './MainContainer';

function UserContainer() {
  return (
    <div>
      <div>
        <div>
          <div>
            Help save Earth and go to your local recycling center today!
          </div>
          <div>Total Amount: {}</div>
          <div>Total Items Collected: {}</div>
        </div>
        <MainContainer />
      </div>
    </div>
  );
}

export default UserContainer;
