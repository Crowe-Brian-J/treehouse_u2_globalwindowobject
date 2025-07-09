/*const body = document.body;

body.addEventListener('click', () => {
  body.innerHTML = '<h1>Hello, World!</h1>';
});*/

//call specific button on click
//const updateButton = document.querySelector('.btn-main')
/*//get li elements to hide
const liHide = document.querySelectorAll('li')
//get highlights from li items
const highlights = document.querySelectorAll('.highlights')*/
//call add task button
const addTaskButton = document.querySelector('.btn-main')
//call hide list button
const toggleButton = document.querySelector('.btn-toggle')
//call remove list button
const removeButton = document.querySelector('.btn-remove')

/*for (const highlight of highlights) {
  highlight.style.backgroundColor = "cornsilk";
}*/

//handle update heading button
const handleClickTaskBtn = () => {
  //find the headline element - no longer updating headline
  //const headline = document.getElementById('headline')
  const input = document.querySelector('.input-main')
  const list = document.querySelector('ul')

  list.insertAdjacentHTML(
    //position
    'afterbegin',
    //what we're inserting
    `<li>${input.value}</li>`
  )

  /*add to parent node -> list defined above
  append adds to end, prepend adds to beginning
  aria-live lets screen readers know content in element will change dynamically and to look for the changes
  polite means it waits for current task to finish before alerting*/

  /*headline.style.border = 'solid 2px red';
  headline.style.fontSize = '60px';*/
  //add transition to headline based on .grow in css (only happens on click)
  //headline.className = 'grow';
  //set headline's content to input value
  //headline.textContent = input.value;
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

//handle remove task button
const handleRemoveTaskBtn = () => {
  //li:last-child selects the last li child element
  const lastItem = document.querySelector('li:last-child')

  lastItem.remove()
}

addTaskButton.addEventListener('click', handleClickTaskBtn)
toggleButton.addEventListener('click', handleHideListBtn)
removeButton.addEventListener('click', handleRemoveTaskBtn)
