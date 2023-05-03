import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
import Users from './Users';
import Profile from './Profile';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/">
          <App />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/users/:userId">
          <Profile />
        </Route>
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
