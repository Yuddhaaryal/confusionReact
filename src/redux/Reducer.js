import { DISHES } from '../shared/dishes.js';
import { PROMOTIONS } from '../shared/propotions.js';
import { LEADERS } from '../shared/leaders.js';
import { COMMENTS } from '../shared/comments.js';
import { createStore } from 'redux';


export const initialState= {
    dishes: DISHES,
    promotions: PROMOTIONS,
    leaders: LEADERS,
    comments: COMMENTS
  };

export const Reducer = (state=initialState,action) => {
return state;
}
export const ConfigureStore = () => {
    const store = createStore(Reducer,initialState);
    return store; 
}

