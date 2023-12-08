import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Podcast from './page/Podcast/Podcast'
<<<<<<< HEAD
import MenuLeft from './page/components/MenuLeft'
import FooterBottom from './page/components/FooterBottom'
import Item from './page/components/Item'
import Login from './page/Login/Login'
import Playlists from './page/Playlists/Playlists'
import Play from './page/Play/Play'
import Search from './page/Search/Search';
=======
import MenuLeft from './component/podcast/MenuLeft'
import FooterBottom from './component/podcast/FooterBottom'
import Item from './component/podcast/Item'
import Login from './page/Login/Login'
import Playlists from './page/Playlists/Playlists'
import Play from './page/Play/Play'

>>>>>>> 2cd2f2a97c32bf8e1a7cd2215b141259da2946c2
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
<<<<<<< HEAD
      <Route path="/search" element=
      {
        <Search/>
      }/>
=======
>>>>>>> 2cd2f2a97c32bf8e1a7cd2215b141259da2946c2
    </Routes>
  );
}

export default App;
