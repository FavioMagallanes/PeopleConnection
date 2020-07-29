const btnmenu = document.querySelector('#btn-menu');
const menu = document.querySelector('#inicio');

btnmenu.addEventListener('click', () => {
  menu.classList.toggle('collapse');
})