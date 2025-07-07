/*const body = document.body;

body.addEventListener('click', () => {
  body.innerHTML = '<h1>Hello, World!</h1>';
});*/

//call specific button on click
const updateButton = document.querySelector('.btn-main')
/*//get li elements to hide
const liHide = document.querySelectorAll('li')
//call hide list btn-toggle
const toggleButton = document.getElementsByClassName('btn-toggle')[0]
//get highlights from li items
const highlights = document.querySelectorAll('.highlights')*/

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
  //set headline's content to input value
  headline.textContent = input.value
  //clear input value for next change
  input.value = ''
}
//handle hide list button
/*const handleHideListBtn = () => {
  for (let i = 0; i < liHide.length; i++) {
    liHide[i].style.color = 'orchid'
  }
}*/

updateButton.addEventListener('click', handleClickHeadingBtn)
//toggleButton.addEventListener('click', handleHideListBtn)
