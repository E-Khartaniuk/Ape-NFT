import React, { useEffect, useState } from 'react';
import css from './FAQ.module.css';

import faqData from './faqData';
import FAQCard from 'components/FAQCard/FAQCard';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqDataArr = faqData();

  useEffect(() => {
    setOpenIndex(0);
  }, []);

  const handleToggle = index => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <section id="FAQ" className={css.faqSectionContainer}>
      <h2 className={css.faqTitle}>FAQ</h2>
      <ul className={css.faqList}>
        {faqDataArr.map(({ number, title, description, image }, index) => (
          <FAQCard
            key={index}
            number={number}
            title={title}
            description={description}
            image={image}
            isOpen={openIndex === index}
            onToggle={() => handleToggle(index)}
          />
        ))}
      </ul>
    </section>
  );
}

export default FAQ;
