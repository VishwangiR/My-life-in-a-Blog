
import Navbar from './NavBar';
import Home from './Home';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
//import { BrowserRouter as Router, Switch , Route } from 'react-router-dom/cjs/react-router-dom.min';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/create">
              <Create></Create>
            </Route>
            <Route path="/blogs/:id"> 
              <BlogDetails></BlogDetails>
            </Route>
            <Route path="*"> 
              <NotFound></NotFound>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

// all components should be wrapped inside the router to have access to the router
// the switch component specifies where the new page that is clicked should be loaded and it makes sure that only that page gets loaded whose path is a match. as soon as the match is made, it no longer checks for further routes and comes out of the switch. it happens top to bottom
// specifies the content we would display when user visits this route. a simple "/about" means about page and so on... path="/" (what we mention inside the url ke end pe) <home></home> means to display home inside the route ( content div ) when we have path "/"
// only the content inside switch changes as we change the route. the navbar would be constant and at top at all points
// router, switch and route are used for loading the pages without actually sending request again and again to the server ( single page application )
// route parameter is a variable inside a route eg blog/123 or blog/456 now irrespective of the variable value, it will show the same component. for this we declare for eg id like :id ":" shows that it is changable
// however if for a given value of parameter we want to show blog details of the blog with that id only , we use useParams() hook