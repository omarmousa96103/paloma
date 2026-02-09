const canva = document.querySelector('#canvas')
const clean = document.querySelector('.clean-btn');

const pointer = {
    x: 0.66,
    y: 0.3,
    clicked: true,
}

window.setTimeout(()=>
{

    pointer.x = 0.75
    pointer.y = 0.5
    pointer.clicked = true
}, 700)