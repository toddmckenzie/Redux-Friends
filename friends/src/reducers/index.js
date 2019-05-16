import { FETCHING_FRIENDS, SUCCESS, FAILURE } from '../actions'


const initialState = {
  friends: [],
  fetching: true,
  error: null
}


export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_FRIENDS:
      return { ...state,
        fetching: true,
        error: null
      }
    case SUCCESS:
      return { ...state,
        friends: [...action.payload],
        fetching: false
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
