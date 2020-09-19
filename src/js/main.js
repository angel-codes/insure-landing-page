const btn = document.querySelector('#toggle');
const nav = document.querySelector('#navigation');

btn.addEventListener('click', e => {
  if (nav.classList.contains('hidden')) {
    // Open nav

    // Change the icon of the button
    btn.querySelector('img').src = 'src/images/icon-close.svg';
    // Remove classes to the nav
    nav.classList.remove('hidden');
    // Display nav
    nav.classList.add('w-full', 'flex', 'flex-col', 'flex-grow');
  } else {
    // Close nav

    // Change the icon of the button
    btn.querySelector('img').src = 'src/images/icon-hamburger.svg';
    // Hidden the nav
    nav.classList.add('hidden');
    // Remove styles
    nav.classList.remove('w-full', 'flex', 'flex-col', 'flex-grow');
  }
});
