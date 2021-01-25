import React, { useState, useEffect } from 'react';

import { classNames } from './../../constants/classNames';

import './breadcrumb.scss';

const Breadcrumb = ({ category }) => {
  const [categories, setCategories] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const { breadcrumbContainer, bold } = classNames.breadcrumb;

  const url = `http://localhost:4002/categories/${category}`;

  const apiCall = async url => {
    setLoaded(false);
    const data = await fetch(url);
    const returnedData = await data.json();
    setCategories(returnedData);
    setLoaded(true);
  };

  useEffect(() => {
    apiCall(url);
  }, [url]);

  console.log(categories);

  return (
    <div className={breadcrumbContainer}>
      {loaded && (
        <>
          {categories.map((element, index) => (
            <div key={element.id}>
              {index < categories.length - 1 ? (
                <span>{element.name}</span>
              ) : (
                <span className={bold}>{element.name} </span>
              )}
              {index < categories.length - 1 && ' > '}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
