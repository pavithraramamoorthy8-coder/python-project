// simple reveal for cards
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((c, i) => {
    c.style.opacity = 0;
    c.style.transform = 'translateY(18px)';
    setTimeout(()=> {
      c.style.transition = 'opacity .5s, transform .5s';
      c.style.opacity = 1;
      c.style.transform = 'translateY(0)';
    }, 180 + i*120);
  });
});

// theme toggle (simple)
const toggle = document.getElementById('themeToggle');
toggle?.addEventListener('change', (e) => {
  if(e.target.checked){
    document.documentElement.style.setProperty('--green-1','#2e7d32');
  } else {
    document.documentElement.style.setProperty('--green-1','#4caf50');
  }
});
