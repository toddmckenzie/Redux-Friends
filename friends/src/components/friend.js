import React from 'react';


const Friend = props => {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.email}</p>
      <p>{props.age}</p>
    </div>
  )
}



export default Friend;
