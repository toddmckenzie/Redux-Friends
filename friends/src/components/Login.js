import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';


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
        user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
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
        <input type='text' name='username' placeholder='username' value={this.state.user.username} onChange={this.handleChanges}></input>
        <input type='text' name='password' placeholder='password'value={this.state.user.password} onChange={this.handleChanges}></input>
        <button>{this.props.isLogginIn ? (
          <Loader type="ThreeDots" color="#1f2a38" height="12" width="26" /> ): ('Log in'
        )}</button>
      </form>
    )
  }
}


const mapStateToProps = state => ({
  isLoggingIn: state.isLogginIn
})

export default connect(mapStateToProps, { login })(Login);
