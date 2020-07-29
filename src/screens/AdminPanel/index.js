import React, { useState, useEffect } from 'react'
import api from '../../services/api';
import { setWatching, setAI } from '../../actions';
import { Button, Row, Form, InputGroup, Container } from 'react-bootstrap';
import TweetList from '../../components/TweetList';
import { useSelector, useDispatch } from 'react-redux';
import { Header } from './styles';
import { Link } from 'react-router-dom';

// linguas suportadas pelo twitter
const SUPPORTED_LANGUAGES = {
    pt: 'Portuguese',
    en: 'English',
    ar: 'Arabic',
    nl: 'Dutch',
    fa: 'Farsi',
    fr: 'French',
    de: 'German',
    id: 'Indonesian',
    it: 'Italian',
    ja: 'Japanese',
    es: 'Spanish',
}

/**
 * tela para moderação dos tweets
 */
function AdminPanel() {
    // variaveis no estado do redux
    const hashtag = useSelector(state => state.hashtag);
    const list = useSelector(state => state.list);
    const approved = useSelector(state => state.approved);
    const rejected = useSelector(state => state.rejected);
    const watching = useSelector(state => state.watching);
    const language = useSelector(state => state.language);
    const ai_enabled = useSelector(state => state.ai_enabled);

    const dispatch = useDispatch();

    const [query, setQuery] = useState('');
    const [lang, setLang] = useState('');

    useEffect(() => {
        setQuery(hashtag);
    }, [hashtag]);

    useEffect(() => {
        setLang(language);
    }, [language]);

    /**
     * request para comecar o monitoramento
     */
    const startWatching = () => {
        const url = '/watch/' + encodeURIComponent(query) + "?lang=" + lang;
        api.get(url).then(({ data }) => {
            // se for bem sucedido, seta o watching pra verdadeiro
            if (data.status.toString() === "1") {
                dispatch(setWatching(true));
            }
        }).catch(e => { });
    }

    /**
     * request para parar o monitoramento
     */
    const stopWatching = () => {
        api.get('/stop').then(({ data }) => {
            // se for bem sucedido, seta o watching pra falso
            if (data.status.toString() === "1") {
                dispatch(setWatching(false));
            }
        }).catch(e => { });
    }

    /**
     * request para limpar os tweets e parar o monitoramento
     */
    const clearTweets = () => {
        api.get('/clear').then(({ data }) => {
            // se for bem sucedido, seta o watching pra falso
            if (data.status.toString() === "1") {
                dispatch(setWatching(false));
            }
        }).catch(e => { });
    }

    /**
     * request para habilitar e desabilitar IA
     */
    const enableAI = () => {
        api.get(`/ai/${ai_enabled ? 'disable' : 'enable'}`).then(({ data }) => {
            // se for bem sucedido, seta o watching pra falso
            if (data.status.toString() === "1") {
                dispatch(setAI(!ai_enabled));
            }
        }).catch(e => { });
    }

    return (
        <>
            <Header expand={!watching && !list.length && !approved.length && !rejected.length}>
                <Link to="/" className="float-left">
                    <Button variant="light">
                        Main Screen
                        </Button>
                </Link>
                <div>
                    Twitter Hashtag Watcher
                </div>
                <div>
                    <InputGroup>
                        <Form.Control disabled={watching} value={query} type="text" onChange={({ target }) => setQuery(target.value)}></Form.Control>

                        <Form.Control disabled={watching} className="custom-select" as="select" value={lang} onChange={({ target }) => setLang(target.value)}>
                            <option value="">All languages</option>
                            {Object.keys(SUPPORTED_LANGUAGES).map(key => (
                                <option key={key} value={key}>{SUPPORTED_LANGUAGES[key]}</option>
                            ))}
                        </Form.Control>

                        <InputGroup.Append>
                            <Button variant="dark" onClick={() => watching ? stopWatching() : startWatching()}>
                                {watching ? "Stop" : "Start"}
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                <div>
                    <Button variant="dark" onClick={() => clearTweets()}>
                        Reset
                    </Button>
                    &nbsp;
                    <Button variant={ai_enabled ? "danger" : "secondary"} onClick={() => enableAI()}>
                        {ai_enabled ? "Disable AI" : "Enable AI"}
                    </Button>
                </div>
            </Header>
            <div style={{ height: '90px' }}></div>
            <Container>
                <Row>
                    <TweetList tweets={approved} title="Approved" options={{ reject: true }} />
                    <TweetList tweets={list} title="List" options={{ approve: true, reject: true, delete: true }} />
                    <TweetList tweets={rejected} title="Rejected" options={{ approve: true, delete: true }} />
                </Row>
            </Container>
        </>
    );
}

export default React.memo(AdminPanel);