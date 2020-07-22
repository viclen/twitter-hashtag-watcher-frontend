import React from 'react'
import { useSelector } from 'react-redux';

import TweetCard from '../../components/TweetCard';
import { Mosaic, Hashtag } from './style';
import './style.css';
import { Container } from 'react-bootstrap';

function ScreenView() {
    const approved = useSelector(state => state.approved);
    const hashtag = useSelector(state => state.hashtag);

    return (
        <Container fluid={true}>
            <h1 className="text-center py-3 text-dark">
                {hashtag}
            </h1>

            <Mosaic>
                {approved.map(tweet => (
                    <div className="item" key={tweet.id}>
                        <TweetCard {...tweet} />
                    </div>
                ))}
            </Mosaic>
        </Container>
    );
}

export default React.memo(ScreenView);