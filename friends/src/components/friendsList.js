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
    return (
      <div>
        {this.props.friends.map(friend => {
         return <Friend friend={friend} />
       })}
       <FriendForm addFriend={this.addFriend}/>


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
    fetchFriends,
    add_friend,
    delete_friend
  }
)(FriendsList);
