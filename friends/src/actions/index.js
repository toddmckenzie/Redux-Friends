import axios from 'axios';
import { axiosWithAuth } from '../axiosWithAutho';




export const FETCHING_FRIENDS = 'FETCHING_FRIENDS';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const ADD_FRIEND = 'ADD_FRIEND';
export const DELETE_FRIEND = 'DELETE_FRIEND';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGIN_START= 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const ADD_FRIEND_SUCCESS = 'ADD_FRIEND_SUCCESS';


export const fetchFriends = () => dispatch => {
  dispatch({ type: FETCHING_FRIENDS })
  axiosWithAuth()
    .get('http://localhost:5000/api/friends')
    .then(res => {
      console.log(res.data)
      dispatch({ type: SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log(' here is the err ' + err)
      dispatch({ type: FAILURE, payload: err })
    })
}


export const addfriend = (friend) => dispatch => {
  dispatch({ type: ADD_FRIEND })
  axios.post('http://localhost:5000/api/friends', friend, {
    headers: { Authorization: localStorage.getItem('token')}
  })
    .then(res =>  {
      dispatch({ type: ADD_FRIEND_SUCCESS, payload: res.data })
    })
    .catch(err => {
      if (err.res.status === 403){
        console.log(err.res.status)
      } else {
        console.log(err.res)
      }
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
