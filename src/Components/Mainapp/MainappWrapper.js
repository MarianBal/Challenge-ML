import React, { useState } from 'react';

import MainappView from './MainappView';

const MainappWrapper = () => {
  const [showDetail, setShowDetail] = useState(true);

  return <MainappView showDetail={showDetail} setShowDetail={setShowDetail} />;
};

export default MainappWrapper;
