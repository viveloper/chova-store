import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Dslr from './components/Dslr';
import Mirrorless from './components/Mirrorless';
import Compact from './components/Compact';
import Lens from './components/Lens';
import Speedlight from './components/Speedlight';
import Binoculars from './components/Binoculars';
import Accessories from './components/Accessories';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dslr" component={Dslr} />
        <Route path="/mirrorless" component={Mirrorless} />
        <Route path="/compact" component={Compact} />
        <Route path="/lens" component={Lens} />
        <Route path="/speedlight" component={Speedlight} />
        <Route path="/binoculars" component={Binoculars} />
        <Route path="/accessories" component={Accessories} />
        <Route path="" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
