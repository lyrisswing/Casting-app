import { createSelector } from 'reselect';

const selectList = state => state.list;

export const selectApprovedList = createSelector(
    [selectList],
    list => list.approved
)

export const selectRejectedList = createSelector(
    [selectList],
    list => list.rejected
)