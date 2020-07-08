import React from 'react';
import { connect } from 'react-redux';

import { updateActorsById } from '../../redux/actors/actors.actions';
import { updateFeedback } from '../../redux/feedback/feedback.actions';
import { updateApprovedList, updateRejectedList } from '../../redux/list/list.actions';
import { ButtonContainer, ChooseButton } from './Button.styles';

const Button = ({ actor, updateActorsById, setFeedback, setApproved, setRejected }) => {
    return (
        <ButtonContainer>
            <ChooseButton reject
                onClick={() => {
                    updateActorsById(actor)
                    setFeedback("left", actor.name)
                    setRejected(actor.name)
                }}>
                <i className="fas fa-times"></i></ChooseButton>
            <ChooseButton
                onClick={() => {
                    updateActorsById(actor)
                    setFeedback("right", actor.name)
                    setApproved(actor.name)
                }}>
                <i className="fas fa-check"></i></ChooseButton>
        </ButtonContainer>
    )
};

const mapDispatchToProps = dispatch => ({
    updateActorsById: actor => dispatch(updateActorsById(actor)),
    setFeedback: (direction, person) => dispatch(updateFeedback(direction, person)),
    setApproved: (name) => dispatch(updateApprovedList(name)),
    setRejected: (name) => dispatch(updateRejectedList(name))
})

export default connect(null, mapDispatchToProps)(Button);