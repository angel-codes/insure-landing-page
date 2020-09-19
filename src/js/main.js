const btn = document.querySelector('#toggle');
const nav = document.querySelector('#navigation');

btn.addEventListener('click', e => {
  if (nav.classList.contains('hidden')) {
    // Open nav
    // Remove classes to the nav
    nav.classList.remove('hidden');

    // Display nav
    nav.classList.add('w-full', 'flex', 'flex-col', 'flex-grow');
  } else {
    // Close nav
    // Hidden the nav
    nav.classList.add('hidden');

    // Remove styles
    nav.classList.remove('w-full', 'flex', 'flex-col', 'flex-grow');
  }
});
