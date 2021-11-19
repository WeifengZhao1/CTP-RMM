import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Components/NavbarComp";
import SearchBar from "./Components/SearchBar";
import WriteComment from "./Pages/WriteComment";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Footer from "./Components/Footer";
import Results from "./Pages/Results";

function App() {
  return (
    <div className="App">
      <Router>
      <NavbarComp />
      <div>
        <Switch>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/WriteComment" component={WriteComment}/>
          <Route path="/Results" component={Results}/>
          <Route path="/" component={Home}/>
        </Switch>
      </div>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
