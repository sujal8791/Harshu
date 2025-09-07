function createBalloon() {
  const balloon = document.createElement('div');
  balloon.classList.add('balloon');
  balloon.style.left = Math.random() * window.innerWidth + 'px';
  balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`;
  balloon.style.animationDuration = (5 + Math.random() * 5) + 's';
  document.body.appendChild(balloon);

  setTimeout(() => {
    balloon.remove();
  }, 10000);
}

setInterval(createBalloon, 500);
