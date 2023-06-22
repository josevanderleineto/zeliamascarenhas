const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menuToggle.addEventListener('click', () => {
  console.log("click");
  sidebar.classList.toggle('active');
});
//
document.addEventListener('click', (event) => {
  const target = event.target;
  const isMenuOpen = sidebar.classList.contains('active');

  // Verifica se o clique ocorreu dentro ou fora do menu
  if (isMenuOpen && !target.closest('.sidebar') && !target.closest('.menu-toggle')) {
    sidebar.classList.remove('active');
  }
});
