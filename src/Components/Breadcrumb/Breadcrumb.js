import React, { useState, useEffect } from 'react';

import apiCall from '../../utils/apiCall';
import { classNames } from './../../constants/classNames';

import './breadcrumb.scss';

const Breadcrumb = ({ category }) => {
  const [categories, setCategories] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const { breadcrumbContainer, bold } = classNames.breadcrumb;

  const url = `http://localhost:4002/categories/${category}`;

  useEffect(() => {
    apiCall(url, setLoaded, setCategories);
  }, [url]);

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
