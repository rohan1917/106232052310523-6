// import logo from './logo.svg';
import "./App.css";

// Routing
import { Routes, Route } from "react-router-dom";

// React Slick CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Pages
import PlayPage from "./pages/Play.Page";
import HomePage from "./pages/Home.Page";
import MoviePage from "./pages/Movie.Page";



function App() {
  return <Routes>
    <Route path="/" element={<HomePage/>}/>
    <Route path="/movie/:id" element={<MoviePage/>}/>
    <Route path="/plays" element={<PlayPage/>}/>
  </Routes>;
}

export default App;
