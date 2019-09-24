import React from 'react';
import Product from './Product';

export default class Products extends React.Component {    
  render() {
    const products = this.props.products;
    return (
      <div className="products">
        <ul>
          <li>
            <Product />
          </li>
          <li>
            <Product />
          </li>
          <li>
            <Product />
          </li>
          <li>
            <Product />
          </li>
        </ul>        
      </div>
    );
  }
}