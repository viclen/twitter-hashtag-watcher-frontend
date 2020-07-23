import React, { useState, useEffect } from 'react'
import api from '../../services/api';
import { setWatching } from '../../actions';
import { Button, Row, Form, InputGroup, Container } from 'react-bootstrap';
import TweetList from '../../components/TweetList';
import { useSelector, useDispatch } from 'react-redux';
import { Header } from './styles';

// linguas suportadas pelo twitter
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

    return (
        <>
            <Header expand={!watching && !list.length && !approved.length && !rejected.length}>
                <div>
                    Twitter Hashtag Watcher
                </div>
                <div>
                    <InputGroup>
                        <Form.Control disabled={watching} value={query} type="text" onChange={({ target }) => setQuery(target.value)}></Form.Control>

                        <Form.Control disabled={watching} className="custom-select" as="select" value={lang} onChange={({ target }) => setLang(target.value)}>
                            <option value="">Todos os idiomas</option>
                            {Object.keys(SUPPORTED_LANGUAGES).map(key => (
                                <option key={key} value={key}>{SUPPORTED_LANGUAGES[key]}</option>
                            ))}
                        </Form.Control>

                        <InputGroup.Append>
                            <Button variant="dark" onClick={() => watching ? stopWatching() : startWatching()}>
                                {watching ? "Parar" : "Começar"}
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </div>
                <div>
                    <Button variant="dark" onClick={() => clearTweets()}>
                        Limpar
                    </Button>
                </div>
            </Header>
            <div style={{ height: '90px' }}></div>
            <Container>
                <Row>
                    <TweetList tweets={approved} title="Aprovados" options={{ reject: true }} />
                    <TweetList tweets={list} title="Lista" options={{ approve: true, reject: true, delete: true }} />
                    <TweetList tweets={rejected} title="Reprovados" options={{ approve: true, delete: true }} />
                </Row>
            </Container>
        </>
    );
}

export default React.memo(AdminPanel);