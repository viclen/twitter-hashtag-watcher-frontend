import { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";

/**
 * hooks para uso da conexao de socket
 */
export default function useSocket() {
    const [socket, setSocket] = useState(null);

    /**
     * tratamento de erros
     * @param e erro a ser tratado
     */
    const handleErrors = (e) => {
        console.log(e);
    }

    /**
     * funcao para fazer a conexão com o socket
     */
    useEffect(() => {
        let socketIO = socketIOClient(process.env.REACT_APP_SERVER);

        socketIO.on('connect_error', err => handleErrors(err));
        socketIO.on('connect_failed', err => handleErrors(err));
        socketIO.on('connect_refused', err => handleErrors(err));

        setSocket(socketIO);
    }, [])

    return socket;
}
