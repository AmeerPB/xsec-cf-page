const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');
  if (e.target.matches('.next') || e.keyCode === 39) {
    slider.append(items[0]);
  } else if (e.target.matches('.prev') || e.keyCode === 37) {
    slider.prepend(items[items.length - 1]);
  }
}

document.addEventListener('click', activate, false);
window.addEventListener('keyup', arrowUp);
window.addEventListener('keydown', arrowDown);
window.addEventListener('keydown', activate); // Add key event for slider navigation

function arrowDown(e) {
  const key = document.querySelector(`.arrow-key[data-key="${e.keyCode}"]`);
  if (key) key.classList.add('press');
}

function arrowUp(e) {
  const key = document.querySelector(`.arrow-key[data-key="${e.keyCode}"]`);
  if (key) key.classList.remove('press');
}
