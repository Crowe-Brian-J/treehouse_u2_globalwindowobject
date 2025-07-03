/*const body = document.body;

body.addEventListener('click', () => {
  body.innerHTML = '<h1>Hello, World!</h1>';
});*/

const headline = document.getElementById('headline')
//call specific button on click
const updateButton = document.getElementById('btn-main')

// add this to call on button click
// headline.style.border = 'solid 2px red';

const handleClick = () => {
  headline.style.border = 'solid 2px red'
}

updateButton.addEventListener('click', handleClick)
