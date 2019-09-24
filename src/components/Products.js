import React from 'react';
import Product from './Product';

export default class Products extends React.Component {
  state = {
    products: []
  }

  setProducts = () => {
    fetch('http://localhost:5000/products')
      .then(response => {
        return response.json();
      })
      .then(json => {
        this.setState({ products: json });
      });
  }

  componentDidMount() {
    this.setProducts();
  }

  render() {    
    return (
      <div className="products">
        <ul>
          {
            this.state.products.map((product, index)=><li key={index}><Product product={product} /></li>)
          }
        </ul>
      </div>
    );
  }
}