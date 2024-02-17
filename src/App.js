import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieCrud from "./components/Moviecrud";
import MovieDetails from "./components/MovieDetails";
import AddMovie from "./components/AddMovie";
import NavBarComponent from "./components/NavBarComponent";
import AboutPage from "./components/About";



function App() {
  return (
    //router methods

    /**NAVBAR will be outside of the switch so that it appears on all of the routes  */
    <Router>
      <NavBarComponent />

      <Routes>
        <Route exact path="/" element={<MovieCrud />} />
        <Route path="/movie/:id" element={<MovieDetails />} />

        <Route path="/AddMovie" element={<AddMovie />} />
        <Route path="/AboutPage" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
