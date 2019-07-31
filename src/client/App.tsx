import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavContainer from './containers/NavContainer'
import GuestContainer from './containers/GuestContainer'
import SignedInContainer from './containers/SignedInContainer'
import HistoryContainer from './containers/HistoryContainer'


const App: React.FunctionComponent<{}> = (props: any) => {
  return (
    <div>
      <NavContainer/>
      {/* <Switch>  */}
        <GuestContainer/>
        {/* <SignedInContainer/> */}
        {/* <HistoryContainer/> */}
      {/* </Switch> */}
    </div>
  );
};


export default App;
