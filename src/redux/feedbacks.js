
import * as ActionTypes from './ActionTypes';
export const Feedbacks = ( state= {
    feedbacks: []
  }, action) => {
    switch(action.type){


    case ActionTypes.ADD_FEEDBACK:
        return {...state, feedbacks: state.feedbacks.concat(action.payload) }
        default: return state
    }   
}

