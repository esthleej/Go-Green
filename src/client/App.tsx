import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
// import { State, Types, Recycling } from './types';
// import GuestContainer from './containers/GuestContainer';
import Login from './components/login';
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

  //didMount
  useEffect(() => {
    console.log('in use effect');
    fetch('/recyclingHistory', {
      headers: {
        'Content-Type': 'application/json',
        username: 'lol'
      }
    })
      .then(res => res.json())
      .then(data => console.log('data:', data));
  }, []);

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

  const handleRecycle = e => {
    fetch('/recyclingHistory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        username: 'lol'
      },
      body: JSON.stringify({
        totalPaid: state.totalPaid,
        totalItemsRecycled: state.totalItemsRecycled
      })
    })
      .then(res => res.json())
      .then(data => console.log('data:', data));
  };

  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <UserContainer
                {...props}
                type={state.type}
                handleAdd={handleAdd}
                handleDelete={handleDelete}
                handleRecycle={handleRecycle}
              />
            )}
          />
          <Route path="/loginpage" exact render={() => <Login />} />
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
