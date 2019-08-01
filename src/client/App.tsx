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
    isSignedIn: false,
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

//   post: /verifyToken
// body doesn't expect anything, will just check cookies
// if the token is valid, it should return an object with the 
// properties 'username' and 'iat'. the username can be used 
// to query the database and fetch the user's data

  //didMount
  useEffect(() => {
    fetch('/verifyToken')
    .then(res => res.json())
    .then(jwt => {
      if (jwt.hasOwnProperty('username') && jwt.hasOwnProperty('iat')) {
        fetch('/users', {
          headers: {
            name: jwt.username
          }
        })
        .then(res => res.json())
        .then(res => {
          const stateChange = { ...state };
          stateChange.username = jwt.username
          stateChange.isSignedIn = true;
          setState(stateChange);
        });
      } else {
        setState({...state, isSignedIn: false});
      }
    });

    // fetch('/recyclingHistory', {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     username: 'lol'
    //   }
    // })
    //   .then(res => res.json())
      // .then(data => console.log('data:', data));
  }, []);

  const handlePayment = payment => {
    const stateChange = { ...state };
    stateChange.totalPaid += payment;
    stateChange.totalPaid = Math.floor(stateChange.totalPaid * 100) / 100;
    if (stateChange.totalPaid <= 0) {
      stateChange.totalPaid = 0;
    }
    setState(stateChange);
  }

  const handleAdd = e => {
    const stateChange = { ...state };
    stateChange.type[e.target.id.toLowerCase()][e.target.value] += 1;
    stateChange.totalItemsRecycled += 1;
    setState(stateChange);
  };

  const handleDelete = e => {
    const stateChange = { ...state };
    stateChange.type[e.target.id.toLowerCase()][e.target.value] -= 1;
    stateChange.totalItemsRecycled -= 1;
    if (stateChange.type[e.target.id.toLowerCase()][e.target.value] <= 0) {
      stateChange.type[e.target.id.toLowerCase()][e.target.value] = 0;
      stateChange.totalItemsRecycled += 1;
    }
    setState(stateChange);
  };

  const handleRecycle = () => {
    fetch('/recyclingHistory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: state.username,
        history: {
          date: new Date(),
          amountPaid: state.totalPaid,
          amountRecycled: state.totalItemsRecycled
        }
      })
    })
      .then(res => res.json())
      .then(data => console.log('data:', data));
  };

  return (
    <div>
      {console.log('STATEEEEEEEEEEEEEE', state)}
      <Router>
        <NavBar isSignedIn={state.isSignedIn}/>
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
                isSignedIn={state.isSignedIn}
                handlePayment={handlePayment}
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
                username={state.username}
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
