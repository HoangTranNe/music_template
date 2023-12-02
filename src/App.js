import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Podcast from './page/Podcast/Podcast'
import MenuLeft from './component/podcast/MenuLeft'
import FooterBottom from './component/podcast/FooterBottom'
import Item from './component/podcast/Item'
import Login from './page/Login/Login'
import Playlists from './page/Playlists/Playlists'
import Play from './page/Play/Play'

function App() {
  return (
    <Routes>
      <Route path="/podcast" element=
      {
        <Podcast menu={MenuLeft} footer={FooterBottom} item={Item} />
      } />
      <Route path="/login" element=
      {
        <Login />
      } />
      <Route path="/playlists" element=
      {
        <Playlists item={Item} />
      } />
      <Route path="/play" element=
      {
        <Play />
      } />
    </Routes>
  );
}

export default App;
