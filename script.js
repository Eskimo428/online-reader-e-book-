let content = document.querySelector('.book__content')
let buttonsSize = Array.from(document.querySelectorAll('.font-size'))
let controlSize = document.querySelector('.book__control_font-size')
let controlFont = document.querySelector('.book__control_font-family')
let buttonsFont =  Array.from(document.querySelectorAll('.font-family'))
let controlColor = document.querySelector('.book__control_color')
let controlColorChildren = Array.from(controlColor.children)
let controlBgColor = document.querySelector('.book__control_background')
let controlBgColorChildren = Array.from(controlBgColor.children)


controlSize.addEventListener('click', changeSize)
controlFont.addEventListener('click', changeFont)
controlColor.addEventListener('click', changeColor)
controlBgColor.addEventListener('click', changeBgColor)

function changeSize(Event){
    Event.preventDefault()
    let target = Event.target
   
    let curentSize = getComputedStyle(target).getPropertyValue('font-size');
    content.style.fontSize = curentSize
    if(target.classList.contains('font-size')){
        for (let i = 0; i < buttonsSize.length; i++) {
            buttonsSize[i].classList.remove('font-size_active')
        }
        target.classList.add('font-size_active')
    }
}
function changeFont(Event){
    Event.preventDefault()
    let target = Event.target
   
    let curentFont = getComputedStyle(target).getPropertyValue('font-family');
    content.style.fontFamily = curentFont
    if(target.classList.contains('font-family')){
        for (let i = 0; i < buttonsFont.length; i++) {
            buttonsFont[i].classList.remove('font-family_active')
        }
        target.classList.add('font-family_active')
    }
}



function changeColor(Event){
    Event.preventDefault()
    let target = Event.target

    let curentColor = target.getAttribute('data-text-color')
    content.style.color = curentColor

    if(target.classList.contains('color')){
        for (let i = 0; i <controlColorChildren.length; i++) {
        controlColorChildren[i].classList.remove('color_active')
        }
        target.classList.add('color_active')
    }
}

function  changeBgColor(Event){
    Event.preventDefault()
    let target = Event.target

    let curentBgColor = target.getAttribute('data-bg-color')
    content.style.backgroundColor = curentBgColor

    if(target.classList.contains('color')){
        for (let i = 0; i <controlBgColorChildren.length; i++) {
            controlBgColorChildren[i].classList.remove('color_active')
        }
        target.classList.add('color_active')
    }
}