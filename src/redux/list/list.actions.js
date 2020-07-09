import ListActionTypes from './list.types';

export const updateApprovedList = (name) => ({
    type: ListActionTypes.UPDATE_APPROVED_LIST,
    payload: name
})

export const updateRejectedList = (name) => ({
    type: ListActionTypes.UPDATE_REJECTED_LIST,
    payload: name
})