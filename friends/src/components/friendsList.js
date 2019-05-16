import React from 'react';
import Friend from './friend'
import { connect } from 'react-redux';
import FriendForm from './friendForm';
import { fetch_friends, add_friend, delete_friend } from '../actions'



class FriendsList extends React.Component {
  constructor(){
    super();
  }
  componentDidMount() {
    console.log(fetch_friends)
    this.props.fetch_friends();
  }

  addFriend = (friend) => {
    this.addFriend(friend);
  }
  render() {

    return (
    //  <div>
        //{this.props.friends.map(friend => {
      //    return <Friend key={Date.now()} friend={friend} />
      //  })}
    //    <FriendForm addFriend={this.addFriend}/>
    //  </div>
    <p>hi</p>
    )
  }
}

const mapStateToProps = state => {
  return {
  //  friends: state.friendsReducer.friends,
    //fetching: state.friendsReducer.fetching
  }
}



export default connect(mapStateToProps,
  {
    fetch_friends,
    add_friend,
    delete_friend
  }
)(FriendsList);
