import React from 'react';


const Friend = props => {
  console.log(props.friend)
  return (
    <div>
      <p>{props.friend.name}</p>
      <p>{props.friend.email}</p>
      <p>{props.friend.age}</p>
    </div>
  )
}



export default Friend;
