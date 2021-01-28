import React, { useState, useEffect } from 'react';

import Product from '../Product';
import Breadcrumb from '../Breadcrumb';
import Header from '../Header';
import NotFound from '../NotFound';
import apiCall from '../../utils/apiCall';
import { classNames } from './../../constants/classNames';

const Content = props => {
  const [results, setResults] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const search = props.match.params.category;

  const { content } = classNames.content;
  console.log(props);
  console.log('hola');

  const url = `http://localhost:4002/search/${search}`;

  useEffect(() => {
    apiCall(url, setLoaded, setResults);
  }, [url]);

  return (
    <>
      <Header />
      {loaded ? (
        <div>
          <Breadcrumb category={results.items[0].category_id} />
          <div className={content}>
            {results.items.map(element => (
              <Product result={element} />
            ))}
          </div>
        </div>
      ) : (
        <NotFound />
      )}
    </>
  );
};
export default Content;
