const navLinkEls = document.querySelectorAll('.nav__link');
const windowPathname = window.location.pathname;

navLinkEls.forEach(navLinkEl => {
  const linkPathname = new URL(navLinkEl.href).pathname;

  if (linkPathname === windowPathname) {
    navLinkEl.classList.add('nav__link_active');
  }
});
