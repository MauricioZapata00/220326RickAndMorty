
import './App.css';
import Header from './containers/Header';
import {Routes, Route, Link} from "react-router-dom"
import EpisodesListing from './containers/EpisodesListing';
import CharactersListing from './containers/CharactersListing';
import SingleEpisode from './containers/SingleEpisode';
import FavoritesListing from './containers/FavoritesListing';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/episodes" element={<EpisodesListing />} />
        <Route path="/episode/:episodeId" element={<SingleEpisode />} />
        <Route path="/characters" element={<CharactersListing />} />
        <Route path='/favorites' element={<FavoritesListing />} />
      </Routes>
      
    </div>
  );
}

export default App;
//https://www.youtube.com/watch?v=0W6i5LYKCSI