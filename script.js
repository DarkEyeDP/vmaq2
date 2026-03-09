const card = document.querySelector('.bunny-wrap');

const CONFIG = {
  proximity: 60,
  spread: 80,
  blur: 20,
  opacity: 0,
};

card.style.setProperty('--spread', CONFIG.spread);
card.style.setProperty('--blur', CONFIG.blur);

function update(x, y) {
  document.documentElement.style.setProperty('--mx', `${x}px`);
  document.documentElement.style.setProperty('--my', `${y}px`);

  const bounds = card.getBoundingClientRect();
  const near =
    x > bounds.left - CONFIG.proximity &&
    x < bounds.right + CONFIG.proximity &&
    y > bounds.top - CONFIG.proximity &&
    y < bounds.bottom + CONFIG.proximity;
  card.style.setProperty('--active', near ? 1 : CONFIG.opacity);

  const cx = bounds.left + bounds.width * 0.5;
  const cy = bounds.top + bounds.height * 0.5;
  let angle = Math.atan2(y - cy, x - cx) * 180 / Math.PI;
  if (angle < 0) angle += 360;
  card.style.setProperty('--start', angle + 90);
}

document.body.addEventListener('pointermove', (e) => update(e.clientX, e.clientY));

document.body.addEventListener('contextmenu', (e) => e.preventDefault());
