import React from 'react';
import Friend from './friend'
import { connect } from 'react-redux';
import FriendForm from './friendForm';
import { fetchFriends, add_friend, delete_friend } from '../actions'



class FriendsList extends React.Component {
  constructor(){
    super();
  }
  componentDidMount() {
    console.log(fetchFriends)
    this.props.fetchFriends();
  }

  addFriend = (friend) => {
    this.add_friend(friend);
  }
  render() {
    //if (this.props.fetch_friends) {
      return (<h1>HI</h1>)
//  } else {

  //  return (
    //  <div>
      //  {this.props.friends.map(friend => {
      //   return <Friend key={Date.now()} friend={friend} />
    //  })}
      //<div>
      //  <FriendForm addFriend={this.addFriend}/>
     //</div>
   //)
//   }


//  }
  }
}

const mapStateToProps = state => {
  return {
  //  friends: state.friendsReducer.friends,
  //  fetching: state.friendsReducer.fetching
  }
}



export default connect(mapStateToProps,
  {
    fetchFriends,
    add_friend,
    delete_friend
  }
)(FriendsList);
