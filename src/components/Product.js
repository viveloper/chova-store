import React from 'react';

export default class Product extends React.Component {    
  render() {
    const product = this.props.product;
    return (
      <div className="product">
        <div className="pro_img">
          {/* <img src="https://eshop.nikon-image.co.kr/upload/eshop/prdt/NK0002751/NK0002751_main_img.jpg" alt="pro_img"></img> */}
        </div>
        <div className="pro_text">
          <div>NIKKOR Z 85mm f/1.8 S</div>
          <div>980,000원</div>
        </div>
      </div>
    );
  }
}