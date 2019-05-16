import React from 'react';
import { connect } from 'react-redux';
//import Loader from 'react-loader-spinner';


import { login } from '../actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {
        username: '',
        password: ''
      }
    }
  }

    handleChanges = (e) => {
      e.preventDefault();
      this.setState({
        ...this.state.user,
        [e.target.name]: e.target.value
      })
    }

    login = e => {
      e.preventDefault();
      this.props.login(this.state.user).then(() => {
        this.props.history.push('/friends')
      })
    }

  render() {
    return (
      <form onSubmit={this.login}>
        <input type='text' name='username' placeholder='username' value={this.state.username} onChange={this.handleChanges}></input>
        <input type='text' name='password' placeholder='password'value={this.state.password} onChange={this.handleChanges}></input>
      </form>
    )
  }
}


const mapStateToProps = state => ({
  isLoggingIn: state.isLogginIn
})

export default connect(mapStateToProps, { login })(Login);
