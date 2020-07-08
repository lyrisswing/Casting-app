import { combineReducers } from 'redux';
import actorsReducer from './actors/actors.reducer';
import feedbackReducer from './feedback/feedback.reducer';
import listReducer from './list/list.reducer';

const rootReducer = combineReducers({
    actors: actorsReducer,
    feedback: feedbackReducer,
    list: listReducer
});

export default rootReducer;