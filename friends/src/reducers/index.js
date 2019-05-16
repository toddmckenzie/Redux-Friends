import { FETCHING_FRIENDS, SUCCESS, FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_START } from '../actions'


const initialState = {
  friends: [],
  fetching: true,
  error: null,
  isLoggingIn: false
}


function friendsReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true,
        error: ''
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false
      }
    case FETCHING_FRIENDS:
      return { ...state,
        fetching: true,
        error: false
      }
    case SUCCESS:
      return { ...state,
        friends: action.payload,
        fetching: false,
        error: ''
      }
    case FAILURE:
      return {...state,
      fetching: false,
      error: 'We have an error'
}
    default:
      return state;
  }
}


export default friendsReducer;
