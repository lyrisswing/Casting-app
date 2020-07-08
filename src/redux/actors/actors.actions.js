import ActorsTypes from './actors.types';

export const updateActorsById = (actor) => ({
    type: ActorsTypes.UPDATE_ACTOR_BY_ID,
    payload: actor
})

export const updateActorsByName = (actor) => ({
    type: ActorsTypes.UPDATE_ACTOR_BY_NAME,
    payload: actor
})