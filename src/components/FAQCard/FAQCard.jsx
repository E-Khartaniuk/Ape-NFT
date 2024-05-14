import React from 'react';
import PropTypes from 'prop-types';
import css from './FAQCard.module.css';

function FAQCard({ number, title, image, description, isOpen, onToggle }) {
  return (
    <li
      key={number}
      className={`${css.faqCardItem} ${isOpen && css.faqCardItemActive}`}
    >
      <div className={css.faqCardThumb}>
        <span
          className={`${css.faqCardNumber} ${
            isOpen && css.faqCardItemActiveNumber
          }`}
        >
          [ {number} ]
        </span>
        <h4
          onClick={onToggle}
          className={`${css.faqCardTitle} ${
            isOpen && css.faqCardItemActiveTitle
          }`}
        >
          {title}
        </h4>
      </div>

      {isOpen && <p className={css.faqCardDiscription}>{description}</p>}

      {isOpen && (
        <div className={css.imgThumb}>
          <div
            className={css.faqCardImg}
            style={{
              backgroundImage: `url(${image})`,
            }}
          ></div>
        </div>
      )}
    </li>
  );
}

FAQCard.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default FAQCard;
