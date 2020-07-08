import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartItem from '../CardItem/CardItem.component';
import Result from '../Result/Result.component';
import { selectCurrentActors } from '../../redux/actors/actors.selectors';
import { updateActorsByName } from '../../redux/actors/actors.actions';
import { updateFeedback } from '../../redux/feedback/feedback.actions';
import { updateApprovedList, updateRejectedList } from '../../redux/list/list.actions';
import { CollectionContainer, CollectionHeading, HeadingLogo, CardContainer } from './CardCollection.styles';

const CardCollection = ({ currentActors, updateActorsByName, setFeedback, setApproved, setRejected }) => {
    const swiped = (direction, nameToDelete) => {
        setFeedback(direction, nameToDelete);
        if (direction === "right") {
            setApproved(nameToDelete);
        } else if (direction === "left") {
            setRejected(nameToDelete);
        }
    }

    const outOfFrame = (name) => {
        updateActorsByName(name);
    }

    return (
        <CollectionContainer>
            <HeadingLogo />
            <CollectionHeading>Position: Stunt double</CollectionHeading>
            <CardContainer>
                {currentActors.map((actor) =>
                    <CartItem
                        key={actor.id}
                        actor={actor}
                        swiped={swiped}
                        outOfFrame={outOfFrame}
                    />
                )}
                <Result />
            </CardContainer>
        </CollectionContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    currentActors: selectCurrentActors
});

const mapDispatchToProps = dispatch => ({
    setFeedback: (direction, person) => dispatch(updateFeedback(direction, person)),
    updateActorsByName: actor => dispatch(updateActorsByName(actor)),
    setApproved: (name) => dispatch(updateApprovedList(name)),
    setRejected: (name) => dispatch(updateRejectedList(name))
});


export default connect(mapStateToProps, mapDispatchToProps)(CardCollection);
