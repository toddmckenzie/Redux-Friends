import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const ADD_FRIEND = 'ADD_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';


export const fetch_friends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS })
  axios.get('http://localhost:5000/')
    .then(res => {
      console.log(res)
      dispatch({ type: SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAILURE, payload: err })
    })
}


export const add_friend = (friend) => {
  axios.post('http://localhost:5000/', {...friend, id: Date.now()})
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

export const delete_friend = (id) => {
  axios.put('http://localhost:5000/')
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
}
