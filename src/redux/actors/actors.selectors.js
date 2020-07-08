import { createSelector } from 'reselect';

const selectActors = state => state.actors;

export const selectCurrentActors = createSelector(
    [selectActors],
    actors => actors.actorsDB
)