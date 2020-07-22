import { useState, useEffect } from 'react';
import socketIOClient from "socket.io-client";

export default function useSocket() {
    const [socket, setSocket] = useState(null);

    const handleErrors = (e) => {
    }

    useEffect(() => {
        let socketIO = socketIOClient(process.env.REACT_APP_SERVER);

        socketIO.on('connect_error', err => handleErrors(err));
        socketIO.on('connect_failed', err => handleErrors(err));
        socketIO.on('connect_refused', err => handleErrors(err));

        setSocket(socketIO);
    }, [])

    return socket;
}
