import React from 'react';

import './product.scss';
import { classNames } from './../../constants/classNames';

const ProductView = ({ result }) => {
  const {
    productContainer,
    imageContainer,
    infoContainer
  } = classNames.product;

  return (
    <div className={productContainer}>
      <div className={imageContainer}>
        <img src={result.thumbnail} alt={result.title} />
      </div>
      <div className={infoContainer}>Lalala</div>
    </div>
  );
};

export default ProductView;
