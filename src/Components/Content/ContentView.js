import React from 'react';

import Product from '../Product';
import './content.scss';
import { classNames } from './../../constants/classNames';
import { results } from './helper';
// import { translations } from './../../constants/tranlations';

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
