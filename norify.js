// This adds and removes css classes to change header 
// background colour and transparency

const header = document.querySelector('header')
const main = document.querySelector('main')

function fader() {
    let scroll = window.scrollY;
    console.log(scroll)
    console.log(scroll)
    if (scroll > 200 && scroll < 400){
        header.classList.add('opaque')
        header.classList.remove('solidHeader')
    }
    if (scroll > 400) {
        header.classList.remove('opaque')
        header.classList.add('solidHeader')
    }
    if (scroll < 200) {
        header.classList.remove('opaque')
        header.classList.remove('solidHeader')
    }
}
window.addEventListener('scroll', fader)

// This adds to playlist

const newList = document.querySelector('.newlist')
const submit = document.querySelector('.submit')
const list = document.querySelector('ul')
const goodMorning = document.querySelector('.list')


submit.addEventListener('click', () => {
    const playButton = document.querySelector('.listitem > button')
    let listItem = document.createElement('li')
    listItem.innerHTML = newList.value
    let newGoodmorning = document.createElement('div')
    newGoodmorning.classList.add('listitem', 'g')
    let span = document.createElement('span')
    span.innerHTML = newList.value
    let image = document.createElement('img')
    newGoodmorning.appendChild(image)
    newGoodmorning.appendChild(span)
    newGoodmorning.appendChild(playButton)
    goodMorning.appendChild(newGoodmorning)
    list.appendChild(listItem)
    newList.value = ''
})

// This is to change the background colour of the
// main page for each list item the cursor focusses on

const album = document.querySelector('listitem')

const changer1 = () => {
    main.style.backgroundImage = 'linear-gradient(rgb(230, 73, 162), rgb(20, 21, 30) 570px )';
}
const changer2 = () => {
    main.style.backgroundImage = 'linear-gradient(rgb(57, 86, 0), rgb(20, 21, 30) 570px )';
}
const changer3 = () => {
    main.style.backgroundImage = 'linear-gradient(rgb(4, 0, 86), rgb(20, 21, 30) 570px )';
}
const changer4 = () => {
    main.style.backgroundImage = 'linear-gradient(rgb(0, 85, 86), rgb(20, 21, 30) 570px )';
}
const changer5 = () => {
    main.style.backgroundImage = 'linear-gradient(rgb(86, 0, 0), rgb(20, 21, 30) 570px )';
}
const resetBgColour = () => {
    main.style.backgroundImage = 'linear-gradient(rgb(36, 46, 63), rgb(20, 21, 30) 570px )'
}