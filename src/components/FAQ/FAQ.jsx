import React from 'react';
import css from './FAQ.module.css';

import faqData from './faqData';
import FAQCard from 'components/FAQCard/FAQCard';

function FAQ() {
  const faqDataArr = faqData();
  return (
    <section id="FAQ" className={css.faqSectionContainer}>
      <h2 className={css.faqTitle}>FAQ</h2>
      <ul className={css.faqList}>
        {faqDataArr.map(({ number, title, description, image }) => (
          <FAQCard
            number={number}
            title={title}
            description={description}
            image={image}
          />
        ))}
      </ul>
    </section>
  );
}

export default FAQ;
