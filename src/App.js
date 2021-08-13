import instance from "./services/request";
import 'antd/dist/antd.css'
import {BrowserRouter,Link,Route,NavLink,Switch} from 'react-router-dom';
import './pages/style.css'
import Home from "./pages/home";
import About from "./pages/about";
import Profile from './pages/profile';

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import User from "./pages/user";
import NoMatch from "./pages/noMatch";

class App extends PureComponent {
  render() {
    return (
      <div>
         <BrowserRouter>
        <NavLink className="item-href" exact to="/" activeClassName="selected">首页</NavLink>
        <NavLink className="item-href" to="/about" activeClassName="selected">关于</NavLink>
        <NavLink className="item-href" to="/profile" activeClassName="selected">我的</NavLink>
        <NavLink className="item-href" to="/user" activeClassName="selected">用户</NavLink>
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about"  component={About}/>
        <Route path="/profile"  component={Profile}/>
        <Route path="/:id"  component={User}/>
        <Route component={NoMatch}/>
        </Switch>
      </BrowserRouter>
      </div>
    );
  }
}

App.propTypes = {

};

export default App;
