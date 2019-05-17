import React from 'react';
import './friend.css'

const Friend = props => {
  console.log(props.friend)
  return (
    <div className='card'>
      <p>{props.friend.name}</p>
      <p>{props.friend.email}</p>
      <p>{props.friend.age}</p>
    </div>
  )
}



export default Friend;
