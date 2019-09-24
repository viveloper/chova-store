import React from 'react';
import Banner from './Banner';
import Products from './Products';

export default class Home extends React.Component {  
  render() {    
    return (
      <div className="content">
        <Banner />          
        <Products />        
      </div>
    );
  }
}