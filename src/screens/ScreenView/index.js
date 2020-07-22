import React from 'react'
import { connect } from 'react-redux';

import TweetCard from '../../components/TweetCard';
import { Mosaic } from './style';
import './main.css';

function ScreenView({ approved, hashtag }) {
    return (
        <div>
            <h1>Todos os tweets sobre {hashtag}</h1>

            <Mosaic>
                {approved.map(tweet => (
                    <div className="item" key={tweet.id}>
                        <TweetCard {...tweet} />
                    </div>
                ))}
            </Mosaic>
        </div>
    );
}

const mapStateToProps = ({ approved, hashtag }) => ({
    approved,
    hashtag
});

export default React.memo(connect(
    mapStateToProps
)(ScreenView));