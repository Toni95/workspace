import React from 'react';
class Product extends React.Component {
     constructor() {
        // console.log("Hey from constructor");
        super();
        this.state = {
            qu: this.props.productDetails.quantity,
            
        }
        
        this.buyItem = this.buyItem.bind(this);
        
    }
    
    buyItem() {
       
    }
    render() {
        return <div align="left">
            <h1>{this.props.productDetails.name}</h1>
            <p>{this.props.productDetails.description}</p>
            <p>{this.props.productDetails.quantity}</p>
            <img src={this.props.productDetails.image} />
            <br />
            <button onClick={this.buyItem}>Buy</button>
        </div>
    }
}

export default Product;