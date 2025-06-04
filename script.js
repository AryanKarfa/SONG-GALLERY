document.getElementById('start-btn').addEventListener('click', () => {
  const intro = document.getElementById('intro-screen');
  intro.classList.add('fade-out');
  setTimeout(() => {
    intro.style.display = 'none';
  }, 1000);
});

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (4 + Math.random() * 3) + 's';
  heart.style.opacity = Math.random();
  heart.style.width = heart.style.height = (10 + Math.random() * 15) + 'px';
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 7000);
}
setInterval(createHeart, 500);
