import ActorsActionTypes from './actors.types';
import { updateById, updateByName } from './actors.utils';
import ACTORS_DATA from './actors.data';

const INITIAL_STATE = {
    actorsDB: ACTORS_DATA
}

const actorsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActorsActionTypes.UPDATE_ACTOR_BY_ID:
            return {
                actorsDB: updateById(state.actorsDB, action.payload)
            };
        case ActorsActionTypes.UPDATE_ACTOR_BY_NAME:
            return {
                actorsDB: updateByName(state.actorsDB, action.payload)
            };
        default:
            return state;
    }
};

export default actorsReducer;