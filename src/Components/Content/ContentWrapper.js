import React, { useState, useEffect } from 'react';

import ContentView from './ContentView';
import Product from '../Product';
import Breadcrumb from '../Breadcrumb';
import { classNames } from './../../constants/classNames';

const ContentWrapper = props => {
  const [results, setResults] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const search = props.location.search.slice(8);

  const { content } = classNames.content;

  const url = `http://localhost:4002/search/${search}`;

  useEffect(() => {
    apiCall(url);
  }, [url]);

  const apiCall = async url => {
    setLoaded(false);
    const data = await fetch(url);
    const returnedData = await data.json();
    setResults(returnedData);
    setLoaded(true);
  };

  return (
    <>
      {loaded ? (
        <div>
          <Breadcrumb categories={results.categories} />
          <div className={content}>
            {results.items.map(element => (
              <Product result={element} />
            ))}
          </div>
        </div>
      ) : // <ContentView categories={results.categories} products={results} />
      null}
    </>
  );
};
export default ContentWrapper;
