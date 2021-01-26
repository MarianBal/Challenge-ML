import React, { useState, useEffect } from 'react';

import Product from '../Product';
import Breadcrumb from '../Breadcrumb';
import { classNames } from './../../constants/classNames';

const Content = props => {
  const [results, setResults] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const search = props.location.search.slice(8);

  const { content } = classNames.content;

  const url = `http://localhost:4002/search/${search}`;

  const apiCall = async url => {
    setLoaded(false);
    const data = await fetch(url);
    const returnedData = await data.json();
    setResults(returnedData);
    setLoaded(true);
  };

  useEffect(() => {
    apiCall(url);
  }, [url]);

  return (
    <>
      {loaded && (
        <div>
          <Breadcrumb category={results.items[0].category_id} />
          <div className={content}>
            {results.items.map(element => (
              <Product result={element} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
export default Content;
