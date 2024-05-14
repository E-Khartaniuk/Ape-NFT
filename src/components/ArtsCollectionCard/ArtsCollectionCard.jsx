import React from 'react';
import PropTypes from 'prop-types';

import css from './ArtsCollectionCard.module.css';
function ArtsCollectionCard({ image }) {
  return (
    <div className={css.apeImgContainer}>
      <img src={image} alt="ape" className={css.apeImg} />
    </div>
  );
}

ArtsCollectionCard.propTypes = {
  image: PropTypes.string.isRequired,
};

export default ArtsCollectionCard;
