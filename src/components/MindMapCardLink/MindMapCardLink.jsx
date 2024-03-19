import React from 'react';

import css from './MindMapCardLink.module.css';

import linkArrow from '../../img/svg/link_arrow.svg';

function MindMapCardLink({ children }) {
  return (
    <a href="https://github.com/E-Khartaniuk" className={css.mindMapCardlink}>
      <img src={linkArrow} alt="link arrow" className={css.linkArrow} />
      {/* <p className={css.mindMapCardDescription}>{children}</p> */}
      <h4 type="button" className={css.mindMapCardBtn}>
        Learn
        <br /> more
        <br /> in mind map
      </h4>
    </a>
  );
}

export default MindMapCardLink;
