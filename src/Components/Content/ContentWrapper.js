import React, { useState, useEffect } from 'react';

import ContentView from './ContentView';

const ContentWrapper = props => {
  const [results, setResults] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const search = props.location.search.slice(8);

  const url = `http://localhost:4002/search/${search}`;

  useEffect(() => {
    apiCall(url);
    results.length && setLoaded(true);
  }, [url]);

  const apiCall = async url => {
    setLoaded(false);
    const data = await fetch(url);
    const returnedData = await data.json();
    setResults(returnedData);
  };
  return (
    <>
      {loaded ? (
        <ContentView categories={results.categories} products={results} />
      ) : (
        'Hola'
      )}
    </>
  );
};
export default ContentWrapper;
