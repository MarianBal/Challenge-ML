import React from 'react';

import Shipping from '../../img/ic_shipping.png';
import './product.scss';
import { classNames } from './../../constants/classNames';
import { translations } from './../../constants/tranlations';

const ProductView = ({ result }) => {
  console.log(result);
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
        <img src={result.thumbnail} alt={result.title} />
      </div>
      <div className={infoContainer}>
        <div className={dataColumn}>
          <div className={currency}>
            {result.currency_id === 'ARS' && currencyARG}
            {result.price}
            <img src={Shipping} alt={imgAlt} />
          </div>
          {result.title}
        </div>

        <div className={dataColumn}>
          <span>Capital Federal</span>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
