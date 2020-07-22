import React, { useState, useEffect } from 'react'
import api from '../../services/api';
import { setHashtag, setWatching } from '../../actions';
import { Col, Button, Row, Form } from 'react-bootstrap';
import TweetList from '../../components/TweetList';
import { connect } from 'react-redux';

function ScreenView({ list, approved, rejected, hashtag, watching }) {
    const [query, setQuery] = useState(hashtag);

    useEffect(() => {
        setQuery(hashtag);
    }, [hashtag]);

    const startWatching = () => {
        api.get('/watch/' + encodeURIComponent(query)).then(({ data }) => {
            if (data.status.toString() === "1") {
                setWatching(true);
            }
        }).catch(e => { });
    }

    const stopWatching = () => {
        api.get('/stop').then(({ data }) => {
            if (data.status.toString() === "1") {
                setWatching(true);
            }
        }).catch(e => { });
    }

    return (
        <>
            <Row>
                <Col>
                    <Form.Control disabled={watching} value={query} type="text" onChange={({ target }) => setQuery(target.value)}></Form.Control>
                </Col>
                <Col>
                    <Button onClick={() => watching ? stopWatching() : startWatching()}>
                        {watching ? "Parar" : "Começar"}
                    </Button>
                </Col>
            </Row>
            <Row>
                <TweetList tweets={approved} title="Aprovados" options={{ reject: true }} />
                <TweetList tweets={list} title="Lista" options={{ approve: true, reject: true, delete: true }} />
                <TweetList tweets={rejected} title="Reprovados" options={{ approve: true, delete: true }} />
            </Row>
        </>
    );
}

const mapStateToProps = ({ list, approved, rejected, hashtag, watching }) => ({
    list,
    approved,
    rejected,
    hashtag,
    watching
});

const mapDispatchToProps = dispatch => ({
    setHashtag: items => dispatch(setHashtag(items)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScreenView);