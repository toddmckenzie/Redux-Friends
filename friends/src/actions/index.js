import axios from 'axios';

export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const ADD_FRIEND = 'ADD_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGIN_START= 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS })
  axios.get('http://localhost:5000/api/friends')
    .then(res => {
      console.log(res.data)
      console.log('hi')
      dispatch({ type: SUCCESS, payload: res.data.friends })
    })
    .catch(err => {
      console.log(' here is the err ' + err)
      dispatch({ type: FAILURE, payload: err })
    })
}


export const add_friend = (friend) => {
  axios.post('http://localhost:5000/api/friends', {...friend })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}

export const delete_friend = (id) => {
  axios.put('http://localhost:5000/api/friends')
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
}


export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
    return axios
      .post('http://localhost:5000/api/login', creds)
      .then(res => {
        localStorage.setItem('token', res.data.payload);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data.payload })
      })
      .catch(err => console.log(err))
}
