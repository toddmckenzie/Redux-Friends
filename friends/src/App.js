import React from 'react';
import './App.css';
import FriendsList from './components/friendsList';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './PrivateRoute'


function App() {
  return (
    <Router>
      <div className="App">
        <Link to='/login'>Login</Link>
        <Link to='/friends'>Friends</Link>
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/friends' component={FriendsList} />
      </div>
    </Router>
  );
}

export default App;
