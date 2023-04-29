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
      }, 600);
    }

    e.preventDefault();
  });
});
