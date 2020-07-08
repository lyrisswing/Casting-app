export const updateById = (actorsDB, actorToremove) => {
    return actorsDB.filter(actor => actor.id !== actorToremove.id)
};

export const updateByName = (actorsDB, actorToremove) => {
    return actorsDB.filter(actor => actor.name !== actorToremove)
};