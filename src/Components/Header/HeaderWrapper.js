import React, { useState } from 'react';

import HeaderView from './HeaderView';
import { handleChangeCreator, clearInput } from '../../utils/handleSetters';

const HeaderWrapper = () => {
  const [search, setSearch] = useState('');

  const addressSearch = `search?search=${search}`;
  const urlHome = '/';

  return (
    <HeaderView
      addressSearch={addressSearch}
      handleChange={handleChangeCreator(setSearch)}
      searchBar={urlHome}
      clearInput={clearInput(setSearch, '')}
      value={search}
    />
  );
};

export default HeaderWrapper;
