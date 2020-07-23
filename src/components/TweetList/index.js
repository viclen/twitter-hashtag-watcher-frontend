import React from 'react'
import TweetCard from '../TweetCard';
import { Col } from 'react-bootstrap';

/**
 * lista de tweets usada no painel de controle
 * @param {tweets, title, options} post propriedades do componente
 */
function TweetList({ tweets, title, options }) {
    return (
        <>
            <Col>
                <h2 className="text-center title">{title}</h2>

                {!!tweets && tweets.map((tweet, index) => (
                    <TweetCard key={index.toString()} {...tweet} options={options} ></TweetCard>
                ))}
            </Col>
        </>
    )
}

export default TweetList;