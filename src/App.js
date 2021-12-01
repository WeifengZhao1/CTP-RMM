import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComp from "./Components/NavbarComp";
import SearchBar from "./Components/SearchBar";
import WriteComment from "./Pages/WriteComment";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact';
import About from './Components/About';
import Footer from "./Components/Footer";
import Results from "./Pages/Results";
import Data from "./Data.json";
import AllReviews from "./Components/AllReviews";



function App() {

  return (
    <div className="App">
      <Router>
      <NavbarComp/>
      <div>
        <Switch>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/writeComment" component={WriteComment}/>
          <Route exact path="/results/:major" component={Results}/>
          <Route exact path="/results" component={AllReviews} />
          <Route exact path="/" component={Home}/>
          <Route path= "*" component = {() => {
            return "<h4>404 Page Not Found!</h4>"
          }} />
        </Switch>
      </div>
      <Footer/>
      </Router>
    </div>
  );


}

export default App;
