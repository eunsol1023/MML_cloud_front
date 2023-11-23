import React from "react";
import {BrowserRouter as Router,  Route,  Routes,  useLocation,} from "react-router-dom";
import Menubar from "./components/menubar/menubar.js";
import Login from "./components/login/login.container";
import SignupPage from "./components/signup/signup.container.js";
import HomePage from "./components/home/home.container.js";
import Playlist from "./components/playlist/playlist.container.js";
import PlayListView from "./components/playlistview/playlistview.container.js"
import ArtistFavorite from "./components/artistfavorite/artistfavorite.container.js";
import GenreFavorite from "./components/genrefavorite/genrefavorite.container.js";
import SongInfo from "./components/songinfo/songinfo.container.js";
// import axios from "axios";


function App() {
  const location = useLocation();

  console.log(location);

  // axios.defaults.withCredentials = true;


  return (
    <div>
      {!(location.pathname === '/' || location.pathname === '/signup'|| location.pathname === '/artistfavorite'|| location.pathname === '/genrefavorite') && <Menubar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/playlist" element={<Playlist />} />
        <Route path="/playlistview" element={<PlayListView />} />
        <Route path="/artistfavorite" element={<ArtistFavorite />} />
        <Route path="/genrefavorite" element={<GenreFavorite />} />
        <Route path="/songinfo" element={<SongInfo />}/>
      </Routes>
    </div>
  );
}

export default App;
