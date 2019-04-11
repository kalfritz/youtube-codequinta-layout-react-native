/* Core */
import React, { Component } from 'react';

/* Presentational */
import { View } from 'react-native';
import Product from './Product';

import styles from './styles';

export default class ProductList extends Component {
  state = {
    products: [
      {
        id: 1,
        image: 'https://http2.mlstatic.com/sandalia-preta-tira-social-festa-salto-alto-fino-verniz-D_NQ_NP_975586-MLB26887679955_022018-F.jpg',
        title: 'Acne Studios',
        description: 'Andrea nappa dusty pink',
        price: 'R$50,00',
      },
      {
        id: 2,
        image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
        title: 'Acne Studios',
        description: 'Lain pop sky blue',
        price: 'R$70,00',
      },
      {
        id: 3,
        image: 'https://http2.mlstatic.com/sandalia-preta-tira-social-festa-salto-alto-fino-verniz-D_NQ_NP_975586-MLB26887679955_022018-F.jpg',
        title: 'Acne Studios',
        description: 'Andrea nappa dusty pink',
        price: 'R$30,00',
      },
      {
        id: 4,
        image: 'https://images.neimanmarcus.com/ca/1/product_assets/B/3/T/5/S/NMB3T5S_au.jpg',
        title: 'Acne Studios',
        description: 'Lain pop sky blue',
        price: 'R$70,00',
      }
    ],
  };

  render() {
    return (
      <View style={styles.container}>
        { this.state.products.map(product => <Product key={product.id} product={product} />) }
      </View>
    );
  }
}
