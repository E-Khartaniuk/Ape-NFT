import React from 'react';
import css from './FAQCard.module.css';

function FAQCard({ number, title, image, description, isOpen, onToggle }) {
  // const [openCard, setOpenCard] = useState(false);

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
      {isOpen && <img src={image} alt={title} className={css.faqCardImg} />}
    </li>
  );
}

export default FAQCard;
