import React, { useState, useEffect } from 'react';
import { classNames } from './../../constants/classNames';
import { translations } from './../../constants/tranlations';
import apiCall from '../../utils/apiCall';
import Breadcrumb from '../Breadcrumb';
import Header from '../Header';
import NotFound from '../NotFound';

import './detail.scss';

const Detail = props => {
  const [result, setResult] = useState({});
  const [loaded, setLoaded] = useState(false);
  const productId = props.match.params.id;
  const {
    detailContainer,
    firstColum,
    secondColumn,
    detailImg,
    buyButton
  } = classNames.detail;
  const { newText, sold, buy, title } = translations.detailText;
  console.log('algo');
  const url = `http://localhost:4002/items/${productId}`;

  useEffect(() => {
    apiCall(url, setLoaded, setResult);
  }, [url]);

  return (
    <>
      <Header />
      {loaded ? (
        <div>
          <Breadcrumb category={result.item.category_id} />
          <div className={detailContainer}>
            <div className={firstColum}>
              <div className={detailImg}>
                <img src={result?.item?.picture?.url} alt={result?.title} />
              </div>
            </div>
            <div className={secondColumn}>
              <div>
                {result?.item?.condition === 'new' && `${newText} - `}
                {result?.item?.sold_quantity} {sold}
              </div>
              <div>{result?.item?.title}</div>
              <div>
                {result?.item?.price?.currency === 'ARS' &&
                  translations.productText.currencyARG}
                {result?.item?.price?.amount}
              </div>
              <div className={buyButton}>{buy}</div>
            </div>
            <div className={firstColum}>
              <div>{title}</div>
              <div>{result?.item?.description}</div>
            </div>
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Detail;
