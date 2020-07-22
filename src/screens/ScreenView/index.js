import React from 'react'
import { connect } from 'react-redux';

import TweetCard from '../../components/TweetCard';
import { Mosaic, Hashtag } from './style';
import './main.css';
import { Container } from 'react-bootstrap';

function ScreenView({ approved, hashtag }) {
    return (
        <Container fluid={true}>
            <Mosaic>
                {approved.map(tweet => (
                    <div className="item" key={tweet.id}>
                        <TweetCard {...tweet} />
                    </div>
                ))}
            </Mosaic>

            <Hashtag>
                {hashtag}
            </Hashtag>
        </Container>
    );
}

const mapStateToProps = ({ approved, hashtag }) => ({
    approved,
    hashtag
});

export default React.memo(connect(
    mapStateToProps
)(ScreenView));