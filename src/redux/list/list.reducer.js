import ListTypes from './list.types';
import { addToList } from './list.utils'

const INITIAL_STATE = {
    approved: [],
    rejected: []
}

const listReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ListTypes.UPDATE_APPROVED_LIST:
            return {
                ...state,
                approved: addToList(state.approved, action.payload)
            };
        case ListTypes.UPDATE_REJECTED_LIST:
            return {
                ...state,
                rejected: addToList(state.rejected, action.payload)
            };
        default:
            return state;
    }
};

export default listReducer;