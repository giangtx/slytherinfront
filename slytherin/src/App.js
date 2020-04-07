import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter,Route,BrowserRouter as Router,Switch,Redirect} from 'react-router-dom';
import Layout from './components/Layout/Layout'
import Home from './components/Home'
import Image from './components/Image'
function App() {
  return (
      <Router>
          <Switch>
              <Redirect exact from="/" to="/slytherin"/>
              <Route exact={true} path="/slytherin" component={Home}></Route>
              <Layout>
                  <Route  path="/slytherin/hinhanh" >
                      <Route exact path="/slytherin/hinhanh" component={Image}></Route>
                      <Route path="/slytherin/hinhanh/com"><p>Con của hình ảnh</p></Route>
                  </Route>
                  <Route path="/slytherin/hinhanhtest" ><p>fishs are friend</p></Route>
              </Layout>
          </Switch>
      </Router>
  );
}

export default App;
