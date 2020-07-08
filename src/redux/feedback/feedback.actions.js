import FeedbackTypes from './feedback.types';

export const updateFeedback = (direction, person) => ({
    type: FeedbackTypes.UPDATE_FEEDBACK,
    payload: { direction, person }
})