const count = document.querySelector('#row-count');
const subtract = document.querySelector('#subtract-row');
const add = document.querySelector('#add-row');

if (count && subtract && add) {
  let rows = 24;
  function update(delta) {
    rows = Math.min(9999, Math.max(0, rows + delta));
    count.textContent = String(rows);
    subtract.disabled = rows === 0;
    add.disabled = rows === 9999;
    count.classList.remove('is-counting');
    requestAnimationFrame(() => count.classList.add('is-counting'));
  }
  subtract.addEventListener('click', () => update(-1));
  add.addEventListener('click', () => update(1));
}

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-seen');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
}
