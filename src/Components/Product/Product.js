import React from 'react';

import Shipping from '../../img/ic_shipping.png';
import { classNames } from './../../constants/classNames';
import { translations } from './../../constants/tranlations';

import './product.scss';

const Product = ({ result }) => {
  const {
    productContainer,
    imageContainer,
    infoContainer,
    currency,
    dataColumn
  } = classNames.product;

  const { imgAlt, currencyARG } = translations.productText;

  return (
    <div className={productContainer}>
      <div className={imageContainer}>
        <img src={result.picture} alt={result.title} />
      </div>
      <div className={infoContainer}>
        <div className={dataColumn}>
          <div className={currency}>
            {result?.price?.currency === 'ARS' && currencyARG}
            {result?.price?.amount}
            {result?.free_shipping && <img src={Shipping} alt={imgAlt} />}
          </div>
          {result?.title}
        </div>

        <div className={dataColumn}>
          <span>{result.address.state_name}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
