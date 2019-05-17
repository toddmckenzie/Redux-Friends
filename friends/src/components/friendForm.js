import React from 'react';
import './friend.css';
import { addfriend } from '../actions';
import { connect } from 'react-redux';


class FriendForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      friend: {
        name: '',
        age: '',
        email: ''
      }
    }
  }
  handleChanges = e => {
    e.preventDefault();
    this.setState({
      friend: {
      ...this.state.friend,
      [e.target.name]: e.target.value
      }
    })
  }

  addfriend = e => {
    e.preventDefault();
    this.props.addfriend(this.state.friend)
  }



  render() {
    return (
      <div className='form'>
        <form onSubmit={this.addfriend}>
          <input value={this.state.friend.name} type='text' name='name'  placeholder='name' onChange={this.handleChanges} />
          <input value={this.state.friend.age} type='text' name='age'  placeholder='age' onChange={this.handleChanges} />
          <input value={this.state.friend.email} type='text' name='email'  placeholder='email' onChange={this.handleChanges} />
          <button onClick={this.addfriend}>Add Friend</button>
        </form>
      </div>
    )
    }
  }

  const mapStateToProps = state => {
    return {
     friends: state.friends,
      fetching: state.fetching
    }
  }

  export default connect(mapStateToProps,
    {
      addfriend
    }
  )(FriendForm);
