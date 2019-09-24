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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bannerInfo: [],
      products: []
    };
  }

  setBannerInfo = () => {
    fetch('http://localhost:5000/events')
    .then(response=>{
      return response.json();
    })
    .then(json=>{      
      this.setState({bannerInfo: json});
    });    
  }

  setProducts = () => {
    fetch('http://localhost:5000/products')
    .then(response=>{
      return response.json();
    })
    .then(json=>{      
      this.setState({products: json});
    });    
  }

  componentDidMount(){
    this.setBannerInfo();
    // this.setProducts();    
    console.log('App - componentDidMount');
  }

  render(){
    return (
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact render={(props)=><Home {...props} bannerInfo={this.state.bannerInfo} products={this.state.products} />} />                    
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
}

export default App;
