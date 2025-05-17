function showLoveMessage() {
  const message = document.getElementById('secretMessage');
  message.classList.toggle('hidden');
  message.classList.toggle('show');

  // Tampilkan foto dengan animasi setelah tombol diklik
  const photos = document.querySelectorAll('.love-photo');
  photos.forEach((photo, index) => {
    setTimeout(() => {
      photo.style.opacity = '1';
      photo.style.transform = 'translateY(0)';
    }, 500 * (index + 1));
  });
}

// Efek hati jatuh
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = (Math.random() * 2 + 3) + 's';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);
