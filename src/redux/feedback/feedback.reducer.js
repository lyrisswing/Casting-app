import FeedbackActionTypes from './feedback.types';

const INITIAL_STATE = {
    direction: "",
    person: "",
}

const feedbackReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FeedbackActionTypes.UPDATE_FEEDBACK:
            return {
                direction: action.payload.direction,
                person: action.payload.person
            };
        default:
            return state;
    }
};

export default feedbackReducer;