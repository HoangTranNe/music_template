import { Routes, Route, useNavigationType, useLocation, } from 'react-router-dom';
import React, {useEffect} from 'react';
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
import Artist from './page/Artist/Artist';
import DetailsArtist from './page/Artist/DetailsArtist';
import Admin from './page/Admin/Admin';

function App() {  
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);
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
        <Guest item = {Item}/>
      }/>
      <Route path ="/artist" element = {
        <Artist/>
      }/>
      <Route path ="/detailsArtist" element = {
        <DetailsArtist/>
      }/>
      <Route path = "/admin" element = {
        <Admin/>
      }/>
      <Route path="/playlists" element=
      {
        <Playlists item={Item} />
      } />
    </Routes>
  );
}

export default App;
