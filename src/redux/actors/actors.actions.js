import ActorsActionTypes from './actors.types';

export const updateActorsById = (actor) => ({
    type: ActorsActionTypes.UPDATE_ACTOR_BY_ID,
    payload: actor
})

export const updateActorsByName = (actor) => ({
    type: ActorsActionTypes.UPDATE_ACTOR_BY_NAME,
    payload: actor
})