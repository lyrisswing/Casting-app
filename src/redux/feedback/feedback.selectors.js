import { createSelector } from 'reselect';

const selectFeedback = state => state.feedback;

export const selectFeedbackforDirection = createSelector(
    [selectFeedback],
    feedback => feedback.direction
)

export const selectFeedbackforPerson = createSelector(
    [selectFeedback],
    feedback => feedback.person
)