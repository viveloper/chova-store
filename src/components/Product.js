import React from 'react';

export default class Product extends React.Component {
  render() {
    const product = this.props.product;
    if (product) {
      return (
        <div className="product">
          <div className="pro_img">
            <img src={product.image} alt="product_image"></img>
          </div>
          <div className="pro_text">
            <div className="title"><span>{product.title}</span></div>
            <div className="price"><span>{product.price}</span></div>
          </div>
        </div>
      );
    }    
  }
}