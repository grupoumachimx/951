// Función para alternar el menú hamburguesa
function toggleMenu() {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.querySelector('.menu');

  if (menuToggle.checked) {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
}

// Evento click en el ícono del menú hamburguesa
const menuIcon = document.querySelector('.menu-icon');
menuIcon.addEventListener('click', toggleMenu);

// Evento click en el ícono del slider

const slider = document.querySelector('.slider');
let isDragging = false;
let currentX;
let initialX;

slider.addEventListener('mousedown', dragStart);
slider.addEventListener('mouseup', dragEnd);
slider.addEventListener('mouseleave', dragEnd);
slider.addEventListener('mousemove', drag);

function dragStart(e) {
  initialX = e.clientX - slider.offsetLeft;
  isDragging = true;
}

function dragEnd() {
  isDragging = false;
}

function drag(e) {
  if (isDragging) {
    currentX = e.clientX - initialX;
    slider.style.transform = `translateX(${currentX}px)`;
  }
}