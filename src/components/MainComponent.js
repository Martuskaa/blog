import React from 'react'; 
import 'startbootstrap-clean-blog/vendor/bootstrap/css/bootstrap.min.css'; 
import 'startbootstrap-clean-blog/vendor/fontawesome-free/css/all.min.css';
import 'startbootstrap-clean-blog/css/clean-blog.min.css'; 
//import 'startbootstrap-clean-blog/vendor/bootstrap/js/bootstrap.bundle.min.js'; 
import Navigation from './Navigation'; 
import Home from './Home' ;
import Post from './Post';
import Footer from './Footer';
import About from './About';
import { BrowserRouter, Route, Switch } from 'react-router-dom';  

export default class MainComponent extends React.Component { 
  render() { 
    return ( 
      <React.Fragment>
        <Navigation />
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} /> 
              <Route path="/:slug" component={Post} />

            </Switch>
          </div>
        </BrowserRouter>
        <Footer />
      </React.Fragment>
    );
    
  }
}
