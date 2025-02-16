const slider = document.querySelector('.slider');

function activate(e) {
  const items = document.querySelectorAll('.item');

  if (e.target.matches('.next') || e.keyCode === 39) {
    // Move next (Right arrow key)
    slider.append(items[0]);
  } else if (e.target.matches('.prev') || e.keyCode === 37) {
    // Move previous (Left arrow key)
    slider.prepend(items[items.length - 1]);
  }
}

// Listen for click events on navigation buttons
document.addEventListener('click', activate, false);

// Listen for arrow key presses for slider navigation
window.addEventListener('keydown', activate);

// Handle arrow key visual effect
window.addEventListener('keydown', arrowDown);
window.addEventListener('keyup', arrowUp);

function arrowDown(e) {
  const key = document.querySelector(`.arrow-key[data-key="${e.keyCode}"]`);
  if (key) key.classList.add('press');
}

function arrowUp(e) {
  const key = document.querySelector(`.arrow-key[data-key="${e.keyCode}"]`);
  if (key) key.classList.remove('press');
}
