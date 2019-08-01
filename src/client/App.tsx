import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
// import { State, Types, Recycling } from './types';
// import GuestContainer from './containers/GuestContainer';
import UserContainer from './containers/UserContainer';
import HistoryContainer from './containers/HistoryContainer';

const App: React.FunctionComponent<{}> = (props: any) => {
  const [state, setState] = useState({
    username: '',
    password: '',
    totalPaid: 0,
    totalItemsRecycled: 0,
    recyclingHistory: {},
    type: {
      glass: {
        lessThan: 0,
        greaterThan: 0
      },
      plastic: {
        lessThan: 0,
        greaterThan: 0
      },
      metal: {
        lessThan: 0,
        greaterThan: 0
      }
    }
  });

  const handleAdd = e => {
    const stateChange = { ...state };
    stateChange.type[e.target.id.toLowerCase()][e.target.value] += 1;
    setState(stateChange);
  };

  const handleDelete = e => {
    const stateChange = { ...state };
    stateChange.type[e.target.id.toLowerCase()][e.target.value] -= 1;
    if (stateChange.type[e.target.id.toLowerCase()][e.target.value] <= 0) {
      stateChange.type[e.target.id.toLowerCase()][e.target.value] = 0;
    }
    setState(stateChange);
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
            render={props => (
              <UserContainer
                {...props}
                type={state.type}
                handleAdd={handleAdd}
                handleDelete={handleDelete}
              />
            )}
          />
          <Route
            path="/history"
            exact
            render={props => (
              <HistoryContainer
                {...props}
                totalPaid={state.totalPaid}
                totalItemsRecycled={state.totalItemsRecycled}
                recyclingHistory={state.recyclingHistory}
              />
            )}
          />
          {/* <Route path="/history" exact component={HistoryContainer} /> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
