
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createForms} from 'react-redux-form';
import {Feedbacks} from './feedbacks';
import {initialFeedback} from './forms';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            feedbacks: Feedbacks,
            ...createForms({
                feedback: initialFeedback 
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}

