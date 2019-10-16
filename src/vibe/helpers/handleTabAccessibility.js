const handleKeyAccessibility = e => {
  const TABKEYCODE = 9;
  const ENTERKEYCODE = 13;
  if (e.keyCode === TABKEYCODE || ENTERKEYCODE) {
    document.querySelector('body').classList.add('keyboardActive');
  }
};

export const handleClickAccessibility = e => {
  if (e.detail !== 0) { // Determines if event is mouse click or keyboard "click"
    document.querySelector('body').classList.remove('keyboardActive');
  }
};

export default handleKeyAccessibility;
