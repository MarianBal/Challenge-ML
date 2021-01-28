import React from 'react';

import { classNames } from './../../constants/classNames';

import './spinner.scss';

const Spinner = () => {
  const { spinnerContent, content, spinner } = classNames.spinner;

  return (
    <div className={spinnerContent}>
      <div class={content}>
        <div class={spinner}></div>
      </div>
    </div>
  );
};

export default Spinner;
