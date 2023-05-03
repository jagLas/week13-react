import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';
import Users from './Users';
import Profile from './Profile';

const Root = () => {
  const handleClick = ()=> {
    console.log('Thanks for clicking!')
  }

  return (
    <BrowserRouter>
      <div>
        <NavLink to="/" activeStyle={{ fontWeight: "bold" }}>App</NavLink>
        <NavLink activeClassName='red' to="/users">Users</NavLink>
        <NavLink activeClassName="green" to="/users/1">Andrew's Profile</NavLink>
        <NavLink exact to="/" onClick={handleClick}>App with click handler</NavLink>

        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route path="/users/:userId">
            <Profile />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route>
            <h1>404: Page not found</h1>
          </Route>
        </Switch>

      </div>

    </BrowserRouter>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
