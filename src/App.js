
import './App.css';
import Header from './containers/Header';
import {Routes, Route, Link} from "react-router-dom"
import EpisodesListing from './containers/EpisodesListing';
import SingleEpisode from './containers/SingleEpisode';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/episodes" element={<EpisodesListing />} />
        <Route path="/episode/:episodeId" element={<SingleEpisode />} />
      </Routes>
      <Header />
    </div>
  );
}

export default App;
