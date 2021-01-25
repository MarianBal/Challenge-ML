import React from 'react';

import { classNames } from './../../constants/classNames';

import './breadcrumb.scss';

const Breadcrumb = () => {
  const { breadcrumbContainer, bold } = classNames.breadcrumb;
  return (
    <div className={breadcrumbContainer}>
      <span>
        Electrónica, Audio y Video {'>'} iPod {'>'} Reproductores {'>'} iPod
        touch {'>'}
        <span className={bold}> 32GB</span>
      </span>
    </div>
  );
};

export default Breadcrumb;
