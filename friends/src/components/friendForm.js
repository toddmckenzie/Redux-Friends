import React from 'react';


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
  handleChanges = (e) => {
    e.preventDefault();
    this.setState({ friend: {...this.state.friend},
      [e.target.name]: e.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.addFriend(this.state.friend)}>
          <input value={this.state.friend.name} placeholder='name' key={Date.now()} handleChange={this.handleChanges} />
          <input value={this.state.friend.age} placeholder='age' key={Date.now()} handleChange={this.handleChanges} />
          <input value={this.state.friend.email} placeholder='email' key={Date.now()} handleChange={this.handleChanges} />
          <button onClick={this.props.addFriend(this.state.friend)}>Add Friend</button>
        </form>
      </div>
    )
    }
  }

export default FriendForm;
