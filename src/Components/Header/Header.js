import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { classNames } from './../../constants/classNames';
import { translations } from './../../constants/tranlations';
import ML from '../../img/Logo_ML.png';
import searchImage from '../../img/ic_Search.png';

import './header.scss';
import { clearInput } from '../../utils/handleSetters';

const Header = () => {
  const [search, setSearch] = useState('');

  const addressSearch = `/search/${search}`;
  const urlHome = '/';
  const { header, container, searchButton } = classNames.header;
  const {
    placeholder,
    name,
    type,
    imgAlt,
    buttonAlt
  } = translations.headerText;
  return (
    <div className={header}>
      <div className={container}>
        <Link to={urlHome}>
          <img
            src={ML}
            alt={imgAlt}
            onClick={() => clearInput(setSearch, '')}
          />
        </Link>
        <input
          placeholder={placeholder}
          name={name}
          type={type}
          value={search}
          onChange={event => setSearch(event.target.value)}
        />
        <Link to={search.length ? addressSearch : urlHome}>
          <div
            className={searchButton}
            onClick={() => clearInput(setSearch, '')}
          >
            <img src={searchImage} alt={buttonAlt} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
