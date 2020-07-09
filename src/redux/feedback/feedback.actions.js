import FeedbackActionTypes from './feedback.types';

export const updateFeedback = (direction, person) => ({
    type: FeedbackActionTypes.UPDATE_FEEDBACK,
    payload: { direction, person }
})