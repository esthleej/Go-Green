import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
// import GuestContainer from './containers/GuestContainer';
import UserContainer from './containers/UserContainer';
import HistoryContainer from './containers/HistoryContainer';

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

  //   <Route
  //   path='/dashboard'
  //   render={(props) => <Dashboard {...props} isAuthed={true} />}
  // />

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          {/* <GuestContainer /> */}
          <Route
            path="/"
            exact
            render={props => <UserContainer {...props} type={state.type} />}
          />
          {/* <Route
            path="/history"
            exact
            render={props => <HistoryContainer {...props} type={state.type} />}
          /> */}
          <Route path="/history" exact component={HistoryContainer} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
