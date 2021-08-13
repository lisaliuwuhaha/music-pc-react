import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

class User extends PureComponent {
  constructor(props){
    super(props);
    this.state={
      isLogin:false
    }
  }
  render() {
    return this.state.isLogin?(
      <div>
        User
      </div>
    ):<Redirect to="/login"/>
  }
}

User.propTypes = {

};

export default User;