import React from 'react';

import { classNames } from './../../constants/classNames';
import { translations } from './../../constants/tranlations';
import ML from '../../img/Logo_ML.png';
import search from '../../img/ic_Search.png';
import './header.scss';

const HeaderView = () => {
  const { header, container, searchButton } = classNames.header;
  const { placeholder, name, type } = translations.headerText;
  return (
    <div className={header}>
      <div className={container}>
        <img src={ML} alt='Logo Mercado Libre' />
        <input placeholder={placeholder} name={name} type={type} />
        <div className={searchButton}>
          <img src={search} alt='Botón de búsqueda' />
        </div>
      </div>
    </div>
  );
};

export default HeaderView;
