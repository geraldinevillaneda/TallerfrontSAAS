import React, {Suspense} from 'react';
//import { Link, Route, Switch } from "wouter";
import {BrowserRouter,  Route, Switch, Redirect} from 'react-router-dom'
import './App.css';

import Home from './pages/Home/index'
import Login from './pages/Login/login'

import {UserContext} from './context/userContext'



class App extends React.Component
{
  render()
  {
    return(
      <UserContext>
      <Suspense fallback={null}>
      <BrowserRouter>
        <div className="App">
          <Redirect 
            from = '/home'
            to='/'
          />
          <Switch>
            <Route 
              exact
              path = '/'
              component={Home}
            />
            <Route 
              exact
              path = '/login'
              render = {() => <Login />}
            />
            <Route component={null}/>
          </Switch>
        </div>
      </BrowserRouter>
      </Suspense>
      </UserContext>
    );
  }
}


export default App;


