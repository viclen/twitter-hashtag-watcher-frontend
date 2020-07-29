import React from 'react'
import { useSelector } from 'react-redux';

import TweetCard from '../../components/TweetCard';
import { Mosaic } from './style';
import './style.css';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

/**
 * tela que aparecerá no telão
 */
function ScreenView() {
    // variaveis do estado do redux
    const approved = useSelector(state => state.approved);
    const hashtag = useSelector(state => state.hashtag);

    return (
        <Container fluid={true}>
            <h1 className="text-center py-3 text-dark">
                <Link to="/admin" className="float-left">
                    <Button variant="light">
                        Admin Panel
                    </Button>
                </Link>

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