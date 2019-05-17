import React from 'react';
import Friend from './friend'
import { connect } from 'react-redux';
import FriendForm from './friendForm';
import { fetchFriends,  delete_friend } from '../actions';
import './friend.css'


class FriendsList extends React.Component {
  constructor(){
    super();
    this.state = {
      friend: {
        name: '',
        age: '',
        email: ''
      }
    }
  }
  componentDidMount() {
    console.log(fetchFriends)
    this.props.fetchFriends();
  }

  render() {
    return (
      <div>
        <div className='flexing'>
        {this.props.friends.map(friend => {
         return <Friend friend={friend} key={Math.random()} />
       })}
       </div>
       <FriendForm key={Date.now()} />


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
    delete_friend
  }
)(FriendsList);
