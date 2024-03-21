import React from 'react';
import css from './ArtsCollectionCard.module.css';
function ArtsCollectionCard({ image }) {
  return (
    <div className={css.apeImgContainer}>
      <img src={image} alt="ape" className={css.apeImg} />
    </div>
  );
}

export default ArtsCollectionCard;
