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
  handleChanges = e => {
    e.preventDefault();
    this.setState({
      friend: {
      ...this.state.friend,
      [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={() => this.props.addFriend(this.state.friend)}>
          <input value={this.state.friend.name} type='text' name='name'  placeholder='name' onChange={this.handleChanges} />
          <input value={this.state.friend.age} type='text' name='age'  placeholder='age' onChange={this.handleChanges} />
          <input value={this.state.friend.email} type='text' name='email'  placeholder='email' onChange={this.handleChanges} />
          <button onClick={() => this.props.addFriend(this.state.friend)}>Add Friend</button>
        </form>
      </div>
    )
    }
  }

export default FriendForm;
