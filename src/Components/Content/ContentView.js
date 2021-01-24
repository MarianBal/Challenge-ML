import React from 'react';

import Product from '../Product';
import Breadcrumb from '../Breadcrumb';
import { classNames } from './../../constants/classNames';

import './content.scss';

const ContentView = ({ categories, products }) => {
  const { content } = classNames.content;
  console.log('contentView:', products);
  return (
    <>
      <Breadcrumb categories={categories} />
      <div className={content}>
        {products?.length
          ? products.map(result => {
              return <Product result={result} />;
            })
          : null}
      </div>
    </>
  );
};
export default ContentView;
