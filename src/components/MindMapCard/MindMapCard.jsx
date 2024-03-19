import React from 'react';

import css from './MindMapCard.module.css';

function MindMapCard({ children, cardTitle }) {
  return (
    <div className={css.mindMapCardContainer}>
      <p className={css.mindMapCardDescription}>{children}</p>
      <h4 type="button" className={css.mindMapCardBtn}>
        {cardTitle}
      </h4>
    </div>
  );
}

export default MindMapCard;
