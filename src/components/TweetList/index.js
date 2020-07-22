import React from 'react'
import TweetCard from '../TweetCard';
import { Col } from 'react-bootstrap';

function TweetList({ tweets, title, options }) {
    return (
        <>
            <Col>
                <h2 className="text-center">{title}</h2>

                {!!tweets && tweets.map((tweet, index) => (
                    <TweetCard key={index.toString()} {...tweet} options={options} ></TweetCard>
                ))}
            </Col>
        </>
    )
}

export default TweetList;