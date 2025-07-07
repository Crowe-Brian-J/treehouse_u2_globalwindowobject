/*const body = document.body;

body.addEventListener('click', () => {
  body.innerHTML = '<h1>Hello, World!</h1>';
});*/

//call specific button on click
const updateButton = document.querySelector('.btn-main')
/*//get li elements to hide
const liHide = document.querySelectorAll('li')
//get highlights from li items
const highlights = document.querySelectorAll('.highlights')*/
//call hide list btn-toggle
const toggleButton = document.querySelector('.btn-toggle')

/*for (const highlight of highlights) {
  highlight.style.backgroundColor = "cornsilk";
}*/

//handle update heading button
const handleClickHeadingBtn = () => {
  //find the headline element
  const headline = document.getElementById('headline')
  const input = document.querySelector('.input-main')
  /*headline.style.border = 'solid 2px red';
  headline.style.fontSize = '60px';*/
  //add transition to headline based on .grow in css (only happens on click)
  headline.className = 'grow'
  //set headline's content to input value
  headline.textContent = input.value
  //clear input value for next change
  input.value = ''
}

//handle hide list button
const handleHideListBtn = () => {
  const listContainer = document.querySelector('.list-container')

  //use conditional to hide when visible, unhide when invisible
  if (listContainer.style.display === 'none') {
    toggleButton.textContent = 'Hide List'
    //actually remove style from showing up in DOM
    //listContainer.style.display = 'block';
    listContainer.removeAttribute('style')
  } else {
    toggleButton.textContent = 'Show List'
    //hide on click
    listContainer.style.display = 'none'
  }
}

updateButton.addEventListener('click', handleClickHeadingBtn)
toggleButton.addEventListener('click', handleHideListBtn)
