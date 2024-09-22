import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Search from './pages/Search';
import BookDetails from './pages/BookDetails';
import UserProfile from './pages/UserProfile';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/books/:id" component={BookDetails} />
        <Route path="/profile/:id" component={UserProfile} />
      </Switch>
    </Router>
  );
};

export default App;
