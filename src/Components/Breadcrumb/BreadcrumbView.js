import React from 'react';

import { classNames } from './../../constants/classNames';

import './breadcrumb.scss';

const BreadcrumbView = () => {
  const { breadcrumbContainer, bold } = classNames.breadcrumb;
  return (
    <div className={breadcrumbContainer}>
      <span>
        Electrónica, Audio y Video {'>'} iPod {'>'} Reproductores {'>'} iPod
        touch {'>'}
        <span className={bold}> 32GB</span>
      </span>
      {/* //     <div className={container}>
  //       <img src={ML} alt='Logo Mercado Libre' />
  //       <input placeholder={placeholder} name={name} type={type} />
  //       <div className={searchButton}>
  //         <img src={search} alt='Botón de búsqueda' />
  //       </div>
  //     </div> */}
    </div>
  );
};

export default BreadcrumbView;
