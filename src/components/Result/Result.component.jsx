import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectApprovedList, selectRejectedList } from '../../redux/list/list.selectors'
import { ResultContainer, ListContainer, ListTitle, ActorList } from './Result.styles';

const Result = ({ approvedList, rejectedList }) => {
    return (
        <ResultContainer>
            <ListContainer>
                <ListTitle>You liked:</ListTitle>
                {approvedList.length > 0 ?
                    approvedList.map((actor, index) => <ActorList key={index}>{actor}</ActorList>)
                    : <ActorList>None</ActorList>}
            </ListContainer>

            <ListContainer>
                <ListTitle>You disliked:</ListTitle>
                {rejectedList.length > 0 ?
                    rejectedList.map((actor, index) => <ActorList key={index}>{actor}</ActorList>)
                    : <ActorList>None</ActorList>}
            </ListContainer>
        </ResultContainer>
    )
};

const mapStateToProps = createStructuredSelector({
    approvedList: selectApprovedList,
    rejectedList: selectRejectedList
});

export default connect(mapStateToProps)(Result);