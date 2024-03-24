const scrollMenuOnClick = (e, setShowMenu = -1, screenWidth = 768) => {
  e.preventDefault();
  const targetElement = document.getElementById(e.target.textContent);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: 'smooth' });
  }

  if (screenWidth >= 1280 || setShowMenu === -1) return;
  setShowMenu(false);
};

export default scrollMenuOnClick;
