import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Podcast from './page/Podcast/Podcast'
import MenuLeft from './page/components/MenuLeft'
import FooterBottom from './page/components/FooterBottom'
import Item from './page/components/Item'
import Login from './page/Login/Login'
import Playlists from './page/Playlists/Playlists'
import Play from './page/Play/Play'
import Search from './page/Search/Search';
import Forgot from './page/Forgot/Forgot';
import Register from './page/Register/Register';
import Guest from './page/Guest/Guest';
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
      <Route path="/search" element=
      {
        <Search/>
      }/>
      <Route path="/forgot" element=
      {
        <Forgot/>
      }/>
      <Route path="/register" element=
      {
        <Register/>
      }/>
      <Route path="/guest" element={
        <Guest/>
      }/>
    </Routes>
  );
}

export default App;
