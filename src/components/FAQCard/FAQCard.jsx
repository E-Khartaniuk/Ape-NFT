import React, { useState } from 'react';
import css from './FAQCard.module.css';

function FAQCard({ number, title, image, description }) {
  const [openCard, setOpenCard] = useState(false);
  return (
    <li
      key={number}
      className={`${css.faqCardItem} ${openCard && css.faqCardItemActive}`}
    >
      <div className={css.faqCardThumb}>
        <span
          className={`${css.faqCardNumber} ${
            openCard && css.faqCardItemActiveNumber
          }`}
        >
          [ {number} ]
        </span>
        <h4
          onClick={() => {
            setOpenCard(!openCard);
          }}
          className={`${css.faqCardTitle} ${
            openCard && css.faqCardItemActiveTitle
          }`}
        >
          {title}
        </h4>
      </div>

      {openCard && <p className={css.faqCardDiscription}>{description}</p>}
      {openCard && <img src={image} alt={title} className={css.faqCardImg} />}
    </li>
  );
}

export default FAQCard;
