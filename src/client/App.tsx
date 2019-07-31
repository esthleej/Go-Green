import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
// import GuestContainer from './containers/GuestContainer';
import UserContainer from './containers/UserContainer';
// import HistoryContainer from './containers/HistoryContainer';

const App: React.FunctionComponent<{}> = (props: any) => {
  const state = {
    username: '',
    password: '',
    totalPaid: 0,
    totalItemsRecycled: 0,
    recyclingHistory: {},
    type: {
      glass: {
        lessThan: 2,
        greaterThan: 2
      },
      plastic: {
        lessThan: 1,
        greaterThan: 99
      },
      metal: {
        lessThan: 3,
        greaterThan: 1
      }
    }
  };

  // didMount
  // useEffect(() => {});

  return (
    <div>
      <NavBar />
      {/* <Switch>  */}
      {/* <GuestContainer /> */}
      <UserContainer type={state.type} />
      {/* <HistoryContainer/> */}
      {/* </Switch> */}
    </div>
  );
};

export default App;
