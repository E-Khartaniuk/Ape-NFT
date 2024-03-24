import React from 'react';
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
      {/* {isOpen && (
        <div className={css.imgThumb} >
            <img src={image} alt={title} className={css.faqCardImg} />
          </div>
      )
      } */}

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

export default FAQCard;
