import React from 'react';
import './App.css';
import Cart from './components/Cart';
import Header from './components/Header';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import styled from 'styled-components';

function App() {
  return (
    <Router>
      <AppContainer>
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;

// STYLED COMPONENTS BELOW:

const AppContainer = styled.div`
  background-color: #EAEDED;
  height: 100vh;
`;