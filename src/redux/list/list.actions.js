import ListTypes from './list.types';

export const updateApprovedList = (name) => ({
    type: ListTypes.UPDATE_APPROVED_LIST,
    payload: name
})

export const updateRejectedList = (name) => ({
    type: ListTypes.UPDATE_REJECTED_LIST,
    payload: name
})