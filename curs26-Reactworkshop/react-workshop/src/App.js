import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './components/Products.js';

class App extends Component {
  
  render() {
    const products=[{
      id:1,
      name: "Televizor LED Samsung, 80 cm, 32M4002, HD",
      description: "magine clara, detaliata Clean View Clean View reduce zgomotul si interferentele, in timp ce sporeste culoarea si contrastul pentru o vizualizare clara de cristal. Bucura-te de toate la o calitate rafinata a imaginii. Wide colour enhancer",
      quantity: 10,
      image:"https://s11emagst.akamaized.net/products/5440/5439344/images/res_c3737be0d7be8a5cbfe5f7fbc4fb8e42_450x450_h071.jpg"
  },{
      id:2,
      name: "Televizor LED Smart Samsung, 80 cm, 32M5670, Full HD, Argintiu",
      description: "Descoperiti o noua dimensiune a realitatii televizate Samsung FHD TV ofera experiente de vizualizare uluitor de reale si captivante, asa cum nu ati mai vazut pana acum. Veti vedea programele si filmele televizate preferate intr-o lumina complet noua",
      quantity: 15,
      image:"https://s11emagst.akamaized.net/products/8205/8204668/images/res_3d8c03b71be3f0e0333a22049f3eef66_450x450_n7be.jpg"
  },{
      id:3,
      name: "Televizor LED Smart Samsung, 138 cm, 55M5512, Full HD",
      description: "Descoperiti o noua dimensiune a realitatii televizate Samsung FHD TV ofera experiente de vizualizare uluitor de reale si captivante, asa cum nu ati mai vazut pana acum.",
      quantity: 110,
      image:"https://s11emagst.akamaized.net/products/5440/5439348/images/res_35b89e25acb8c3ad0ba79c8895c3c502_450x450_mfv3.jpg"
  },{
      id:4,
      name: "Televizor LED Smart Samsung, 138 cm, 55MU7002, 4K Ultra HD",
      description: "Inovatia sta in detalii HDR1000/Extreme Experimenteaza puterea de iluminare a High Dynamic Range-ului",
      quantity: 130,
      image:"https://s11emagst.akamaized.net/products/5440/5439358/images/res_35962dc5ec73a56fe60709b0eee71f95_450x450_tpnr.jpg"
  }];
  
  // const productItems = products.map((p) => {
  //   return <div>{p.name}</div>
  // });

  const productItems = [];
  for(var i=0; i<products.length; i++) {
    productItems.push(<Product productDetails={products[i]}/>);
  }
  
    return (
      <div className="App">
        {productItems}
      </div>
    );
  }
}

export default App;
