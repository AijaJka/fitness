require('../css/index.styl')
require('animate.css')
document.ready(function () {
    let numDom = document.querySelector('.num')
    let textDom = document.querySelector('.text')
    let num = 5
    let time = setInterval(function () {
        num--
        numDom.textContent = num + 's'
        if (num == 0) {
            location.href = 'register.html'
        }
    }, 1000)
    textDom.addEventListener('click', function () {
        location.href = 'register.html'
    })
})