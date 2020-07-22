import React, { useState, useEffect } from 'react'
import api from '../../services/api';
import { setHashtag, setWatching, setLanguage } from '../../actions';
import { Col, Button, Row, Form, InputGroup } from 'react-bootstrap';
import TweetList from '../../components/TweetList';
import { connect } from 'react-redux';

const SUPPORTED_LANGUAGES = {
    pt: 'Português',
    en: 'Inglês',
    ar: 'Árabe',
    nl: 'Holandês',
    fa: 'Farsi',
    fr: 'Francês',
    de: 'Alemão',
    id: 'Indonésio',
    it: 'Italiano',
    ja: 'Japonês',
    es: 'Espanhol',
}

function ScreenView({ list, approved, rejected, hashtag, watching, language }) {
    const [query, setQuery] = useState(hashtag);
    const [lang, setLang] = useState(language);

    useEffect(() => {
        setQuery(hashtag);
    }, [hashtag]);

    useEffect(() => {
        setLang(language);
    }, [language]);

    const startWatching = () => {
        const url = '/watch/' + encodeURIComponent(query) + "?lang=" + lang;
        api.get(url).then(({ data }) => {
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
                    
                </Col>
                <Col>
                    <InputGroup>
                        <Form.Control disabled={watching} value={query} type="text" onChange={({ target }) => setQuery(target.value)}></Form.Control>

                        <Form.Control className="custom-select" as="select" value={lang} onChange={({ target }) => setLang(target.value)}>
                            <option value="">Todos os idiomas</option>
                            {Object.keys(SUPPORTED_LANGUAGES).map(key => (
                                <option key={key} value={key}>{SUPPORTED_LANGUAGES[key]}</option>
                            ))}
                        </Form.Control>

                        <InputGroup.Append>
                            <Button onClick={() => watching ? stopWatching() : startWatching()}>
                                {watching ? "Parar" : "Começar"}
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
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

const mapStateToProps = ({ list, approved, rejected, hashtag, watching, language }) => ({
    list,
    approved,
    rejected,
    hashtag,
    watching,
    language
});

const mapDispatchToProps = dispatch => ({
    setHashtag: hashtag => dispatch(setHashtag(hashtag)),
    setLanguage: language => dispatch(setLanguage(language)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ScreenView);