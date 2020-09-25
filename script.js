document.querySelector('.burger-wrapper').onclick = () => {
  document.querySelector('#hover-element').classList.toggle('active');
  document.querySelector('.burger-wrapper').classList.toggle('active');
};
