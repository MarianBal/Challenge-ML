import React from 'react';

import Product from '../Product';
import { classNames } from './../../constants/classNames';
import { results } from './helper';

import './content.scss';

const ContentView = () => {
  const { content } = classNames.content;

  return (
    <div className={content}>
      {results.map(result => {
        return <Product result={result} />;
      })}
    </div>
  );
};

export default ContentView;
