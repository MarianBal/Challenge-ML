import React, { useState, useEffect } from 'react';
import { classNames } from './../../constants/classNames';
import { translations } from './../../constants/tranlations';
import Breadcrumb from '../Breadcrumb';

import './detail.scss';

const Detail = props => {
  const [result, setResult] = useState([]);
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

  const url = `http://localhost:4002/items/${productId}`;

  const apiCall = async url => {
    setLoaded(false);
    const data = await fetch(url);
    const returnedData = await data.json();
    setResult(returnedData);
    setLoaded(true);
  };

  useEffect(() => {
    apiCall(url);
  }, [url]);
  console.log(result);
  return (
    <>
      {loaded && (
        <div>
          <Breadcrumb category={result.category_id} />
          <div className={detailContainer}>
            <div className={firstColum}>
              <div className={detailImg}>
                <img src={result?.pictures[0]?.url} alt={result?.title} />
              </div>
            </div>
            <div className={secondColumn}>
              <div>
                {result?.condition === 'new' && `${newText} - `}
                {result?.sold_quantity} {sold}
              </div>
              <div>{result?.title}</div>
              <div>
                {result?.currency_id === 'ARS' &&
                  translations.productText.currencyARG}
                {result?.price}
              </div>
              <div className={buyButton}>{buy}</div>
            </div>
            <div className={firstColum}>
              <div>{title}</div>
              {/* <div>{detail?.plain_text}</div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
