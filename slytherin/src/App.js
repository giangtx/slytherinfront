import React from 'react';
import './App.css';
import {Route,BrowserRouter as Router,Switch,Redirect} from 'react-router-dom';
import Layout from './components/Layout/Layout'
import Home from './components/Home'
import Image from './components/Image'
import Collection from './components/Collection';
import Login from './components/Login';
import Signin from './components/Signin';
import Forum from './components/Forum';
function App() {
  return (
      <Router>
          <Switch>
              <Redirect exact from="/" to="/slytherin"/>
              <Route exact={true} path="/slytherin" component={Home}></Route>
              <Route path="/slytherin/dangnhap" ><Login></Login></Route>
              <Route path="/slytherin/dangky" ><Signin></Signin></Route>
              <Layout>
                  <Route path="/slytherin/hinhanh" >
                      <Route exact path="/slytherin/hinhanh/:imageId" component={Image}></Route>
                  </Route>
                  <Route path="/slytherin/bosuutap" >
                    <Route exact path="/slytherin/bosuutap" component={Collection}></Route>
                    <Route path="/slytherin/bosuutap/:collId" component={Collection}></Route>
                  </Route>
                  <Route exact path="/slytherin/diendan" component={Forum}></Route>
                  <Route path="/slytherin/hinhanhtest" ><p>fishs are friend</p></Route>
              </Layout>
              
          </Switch>
      </Router>
  );
}

export default App;
