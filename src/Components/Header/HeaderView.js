import React from 'react';
import { Link } from 'react-router-dom';

import { classNames } from './../../constants/classNames';
import { translations } from './../../constants/tranlations';
import ML from '../../img/Logo_ML.png';
import search from '../../img/ic_Search.png';

import './header.scss';

const HeaderView = ({
  addressSearch,
  handleChange,
  searchBar,
  clearInput,
  value
}) => {
  const { header, container, searchButton } = classNames.header;
  const { placeholder, name, type, imgAlt } = translations.headerText;
  return (
    <div className={header}>
      <div className={container}>
        <Link to={searchBar}>
          <img src={ML} alt={imgAlt} onClick={clearInput} />
        </Link>
        <input
          placeholder={placeholder}
          name={name}
          type={type}
          value={value}
          onChange={handleChange}
        />
        <Link to={addressSearch}>
          <div className={searchButton} onClick={clearInput}>
            <img src={search} alt='Botón de búsqueda' />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HeaderView;
