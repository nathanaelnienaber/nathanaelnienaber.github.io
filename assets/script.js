document.addEventListener('DOMContentLoaded', () => {
  const greeting = document.createElement('p');
  greeting.textContent = `Hello, welcome to my site! Today's date is ${new Date().toLocaleDateString()}.`;
  document.querySelector('header').appendChild(greeting);
});
