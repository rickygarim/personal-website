const navLinks = document.querySelectorAll('nav a');


navLinks.forEach(link => {
  link.addEventListener('click', e => {
    const currentLink = document.querySelector('.current-page');
    const colorSwitcherLink = document.querySelector('.color-switcher a');

    if (currentLink) {
      currentLink.classList.remove('current-page');
      
    }

    if (colorSwitcherLink) {
      colorSwitcherLink.classList.remove('everything-else');
      colorSwitcherLink.closest('li').classList.remove('color-switcher');
      
    }

    if (link !== currentLink) {
      
      link.classList.add('current-page');
      if (colorSwitcherLink !== null) {
        colorSwitcherLink.classList.add('everything-else');
      }
      link.closest('li').classList.add('color-switcher');
      setTimeout(() => {
        window.location.href = link.href;
      }, 700);
    }

    e.preventDefault();
  });
});

const skillList = document.getElementById('skill-list');
const skillItems = skillList.querySelectorAll('.skill-item');

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

skillItems.forEach(item => {
  const randomColor = getRandomColor();
  item.style.backgroundColor = randomColor;
  item.style.color = '#fff';
});


// document.body.style.zoom = "88%";

