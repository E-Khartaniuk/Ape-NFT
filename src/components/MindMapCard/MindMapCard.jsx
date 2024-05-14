import React from 'react';
import PropTypes from 'prop-types';
import css from './MindMapCard.module.css';

function MindMapCard({ children, cardTitle }) {
  return (
    <div className={css.mindMapCardContainer}>
      <p className={css.mindMapCardDescription}>{children}</p>
      <h4 className={css.mindMapCardBtn}>{cardTitle}</h4>
    </div>
  );
}

MindMapCard.propTypes = {
  children: PropTypes.node.isRequired,
  cardTitle: PropTypes.string.isRequired,
};

export default MindMapCard;
