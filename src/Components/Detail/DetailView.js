import React from 'react';
import { classNames } from './../../constants/classNames';
import { translations } from './../../constants/tranlations';
import { product, detail } from './helper';

import './detail.scss';

const DetailView = () => {
  const {
    detailContainer,
    firstColum,
    secondColumn,
    detailImg,
    buyButton
  } = classNames.detail;
  const { newText, sold, buy, title } = translations.detailText;

  console.log(detail);
  return (
    <div className={detailContainer}>
      <div className={firstColum}>
        <div className={detailImg}>
          <img src={product?.pictures[0]?.url} alt={product?.title} />
        </div>
      </div>
      <div className={secondColumn}>
        <div>
          {product?.condition === 'new' && `${newText} - `}
          {product?.sold_quantity} {sold}
        </div>
        <div>{product?.title}</div>
        <div>
          {product?.currency_id === 'ARS' &&
            translations.productText.currencyARG}
          {product.base_price}
        </div>
        <div className={buyButton}>{buy}</div>
      </div>
      <div className={firstColum}>
        <div>{title}</div>
        <div>{detail?.plain_text}</div>
      </div>
    </div>
  );
};

export default DetailView;
