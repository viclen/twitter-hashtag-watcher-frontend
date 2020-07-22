import React, { useEffect } from "react";
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import { connect } from 'react-redux';

import { setList, setApproved, setRejected, setHashtag, setWatching, setLanguage } from './actions';
import useSocket from "./hooks/Socket";
import AdminPanel from "./screens/AdminPanel";
import ScreenView from "./screens/ScreenView";

import './App.css';

function App({ setList, setApproved, setRejected, setHashtag, setWatching, setLanguage }) {
  let socket = useSocket();

  const setData = data => {
    setList(data.list);
    setApproved(data.approved);
    setRejected(data.rejected);
    setHashtag(data.hashtag);
    setWatching(data.watching);
    setLanguage(data.language);
  }

  useEffect(() => {
    if (!socket) return;
    socket.on("init", data => {
      setData(data);
    });
    socket.on("change", data => setData(data));
  }, [socket]);

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

const mapDispatchToProps = dispatch => ({
  setList: items => dispatch(setList(items)),
  setApproved: items => dispatch(setApproved(items)),
  setRejected: items => dispatch(setRejected(items)),
  setHashtag: hashtag => dispatch(setHashtag(hashtag)),
  setWatching: watching => dispatch(setWatching(watching)),
  setLanguage: language => dispatch(setLanguage(language)),
});

export default React.memo(connect(
  () => ({}),
  mapDispatchToProps
)(App));