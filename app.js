/*const body = document.body;

body.addEventListener('click', () => {
  body.innerHTML = '<h1>Hello, World!</h1>';
});*/

//find the headline element
const headline = document.getElementById('headline')
//call specific button on click
const updateButton = document.getElementById('btn-main')
//get li elements to hide
const liHide = document.getElementsByTagName('li')
//call hide list btn-toggle
const toggleButton = document.getElementsByClassName('btn-toggle')[0]
//get highlights from li items
const highlights = document.getElementsByClassName('highlights')

for (const highlight of highlights) {
  highlight.style.backgroundColor = 'cornsilk'
}

//handle update heading button
const handleClickHeadingBtn = () => {
  headline.style.border = 'solid 2px red'
}
//handle hide list button
const handleHideListBtn = () => {
  for (let i = 0; i < liHide.length; i++) {
    liHide[i].style.color = 'orchid'
  }
}

updateButton.addEventListener('click', handleClickHeadingBtn)
toggleButton.addEventListener('click', handleHideListBtn)
