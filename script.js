const darkModeToggle = document.querySelector('#dark-mode');

darkModeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});
