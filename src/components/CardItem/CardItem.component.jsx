import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import TinderCard from 'react-tinder-card';
import Button from '../Button/Button.component';
import { selectFeedbackforDirection, selectFeedbackforPerson } from '../../redux/feedback/feedback.selectors';
import { Card, CardImage, CardName, Feedback } from './CardItem.styles';

const CardItem = ({ actor, swiped, outOfFrame, direction, person }) => {
    return (
        <>
            <TinderCard
                className="swipe"
                preventSwipe={['up', 'down']}
                onSwipe={(dir) => swiped(dir, actor.name)}
                onCardLeftScreen={() => outOfFrame(actor.name)}
            >
                <Card>
                    <CardImage
                        style={{ backgroundImage: `url(${actor.imageUrl})` }} />
                    <CardName>{actor.name}</CardName>
                </Card>
                <Button actor={actor} />
            </TinderCard>

            {person && direction === "right" && <Feedback direction={direction}> You liked {person}.</Feedback>}
            {person && direction === "left" && <Feedback direction={direction}> You disliked {person}.</Feedback>}
        </>
    )
};

const mapStateToProps = createStructuredSelector({
    direction: selectFeedbackforDirection,
    person: selectFeedbackforPerson
});

export default connect(mapStateToProps)(CardItem);