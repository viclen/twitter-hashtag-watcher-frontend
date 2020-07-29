import React, { useEffect, useCallback } from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { setList, setApproved, setRejected, setHashtag, setWatching, setLanguage, setAI } from './actions';
import useSocket from "./hooks/Socket";
import AdminPanel from "./screens/AdminPanel";
import ScreenView from "./screens/ScreenView";
import './App.css';
import { useDispatch } from "react-redux";

/**
 * classe principal do app
 */
function App() {
  let socket = useSocket();

  const dispatch = useDispatch();

  /**
   * funcao para setar os dados da aplicação no redux
   */
  const setData = useCallback(data => {
    dispatch(setList(data.list));
    dispatch(setApproved(data.approved));
    dispatch(setRejected(data.rejected));
    dispatch(setHashtag(data.hashtag));
    dispatch(setWatching(data.watching));
    dispatch(setLanguage(data.language));
    dispatch(setAI(data.ai_enabled));
  }, [dispatch]);

  useEffect(() => {
    if (!socket) return;
    socket.on("init", data => {
      setData(data);
    });
    socket.on("change", data => setData(data));
  }, [socket, setData]);

  return (
    <BrowserRouter>
      <Switch>
        <Route path="/admin">
          <AdminPanel />
        </Route>
        <Route path="/">
          <ScreenView />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}


export default React.memo(App);