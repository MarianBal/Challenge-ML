import React, { useState, useEffect } from 'react';

import Product from '../Product';
import Breadcrumb from '../Breadcrumb';
import Header from '../Header';
import Spinner from '../Spinner';
import apiCall from '../../utils/apiCall';
import { classNames } from './../../constants/classNames';

const Content = props => {
  const [results, setResults] = useState([]);
  // const [shortenResults, setShortenResults] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const search = props.match.params.category;

  const { content } = classNames.content;

  const url = `http://localhost:4002/search/${search}`;

  useEffect(() => {
    apiCall(url, setLoaded, setResults);
    // setShortenResults(results.items.slice(0));
  }, [url]);

  return (
    <>
      <Header />
      {loaded ? (
        <div>
          <Breadcrumb category={results.items[0].category_id} />
          <div className={content}>
            {results.items.slice(0, 4).map(element => (
              <Product result={element} />
            ))}
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </>
  );
};
export default Content;
