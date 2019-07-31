import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavContainer from './containers/NavContainer';
// import GuestContainer from './containers/GuestContainer';
import UserContainer from './containers/UserContainer';
// import HistoryContainer from './containers/HistoryContainer';

const App: React.FunctionComponent<{}> = (props: any) => {
  const state = {
    username: '',
    password: '',
    totalPaid: 0,
    totalItemsRecycled: 0,
    recyclingHistory: {}
  };

  // didMount
  // useEffect(() => {});

  return (
    <div>
      <NavContainer />
      {/* <Switch>  */}
      {/* <GuestContainer /> */}
      <UserContainer />
      {/* <HistoryContainer/> */}
      {/* </Switch> */}
    </div>
  );
};

export default App;
