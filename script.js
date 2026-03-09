const CARD = document.querySelector('.bunny-wrap');

const CONFIG = {
  proximity: 60,
  spread: 80,
  blur: 20,
  opacity: 0,
};

CARD.style.setProperty('--spread', CONFIG.spread);
CARD.style.setProperty('--blur', CONFIG.blur);

document.body.addEventListener('pointermove', (event) => {
  const bounds = CARD.getBoundingClientRect();

  if (
    event.x > bounds.left - CONFIG.proximity &&
    event.x < bounds.left + bounds.width + CONFIG.proximity &&
    event.y > bounds.top - CONFIG.proximity &&
    event.y < bounds.top + bounds.height + CONFIG.proximity
  ) {
    CARD.style.setProperty('--active', 1);
  } else {
    CARD.style.setProperty('--active', CONFIG.opacity);
  }

  const centerX = bounds.left + bounds.width * 0.5;
  const centerY = bounds.top + bounds.height * 0.5;
  let angle = Math.atan2(event.y - centerY, event.x - centerX) * 180 / Math.PI;
  if (angle < 0) angle += 360;
  CARD.style.setProperty('--start', angle + 90);
});
