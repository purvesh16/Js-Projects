const containers = document.querySelector('.container')
const left    = document.querySelector('.left')
const right   = document.querySelector('.right')


/* we can use mouseover = mouseout or mouseenter + mouseleave */

// This is my method means i had coded it like this after that i saw brad method

left.addEventListener('mouseover', () =>{
    containers.classList.toggle('hover-left')
})
left.addEventListener('mouseout', () =>{
    containers.classList.toggle('hover-left')
})

right.addEventListener('mouseover', () =>{
    containers.classList.toggle('hover-right')
})
right.addEventListener('mouseout', () =>{
    containers.classList.toggle('hover-right')
})

// this is Brad method 

/*
left.addEventListener('mouseenter', () => container.classList.add('hover-left'))
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'))

right.addEventListener('mouseenter', () => container.classList.add('hover-right'))
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'))

*/
