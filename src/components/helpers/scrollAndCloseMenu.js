const closeMenuOnClick = e => {
  e.preventDefault();
  const targetElement = document.getElementById(e.target.textContent);
  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }
};

export default closeMenuOnClick;
