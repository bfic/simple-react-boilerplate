import React from 'react';
import { browserHistory } from 'react-router';

var styles = require('./style.scss');

export default class LoginPage extends React.Component {
  signUp() {
    browserHistory.push('/home');
  }
  
  render() {
    console.log(styles);
    return (
      <div className={styles.content}>
        <h1 className={styles.heading}>Login Page</h1>
        <p className={styles.lead}>Create an account to get started!</p>
        <button className={styles.signUpButton} onClick={this.signUp}>Sign up</button>
      </div>
    );
  }
}
