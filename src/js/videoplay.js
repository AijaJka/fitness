require('../css/videoplay.styl')
document.ready(function () {
    console.log(sessionStorage.getItem('playdata'));
    let playdata = JSON.parse(sessionStorage.getItem('playdata'))

    console.log(playdata);
    let numfirstDom = document.querySelector('.numfirst')
    let numlastDom = document.querySelector('.numlast')
    let backDom = document.querySelector('.icon-jiantou_shangyiye')
    let pauseDom = document.querySelector('.icon-zanting')

    let nextDom = document.querySelector('.icon-jiantou_xiayiye')
    let textDom = document.querySelector('.text')
    console.log(playdata);
    let videoboxDom = document.querySelector('.videobox')

    let colorboxDom = document.querySelector('.colorbox')

    let picboxDom = document.querySelector('.picbox')
    let textboxDom = document.querySelector('.textbox')
    let titleDom = document.querySelector('.title')

    let modelboxDom = document.querySelector('.modelbox')

    let continueDom = document.querySelector('.green')
    let pausedDom = document.querySelector('.red')

    let imgDom = document.createElement('img')
    picboxDom.appendChild(imgDom)

    let len = 0
    let index = playdata.length

    let html = ''
    html = `
    <video muted="muted" autoplay="autoplay"  class='play' src="${BASE_URL + playdata[len].videoUrl}"></video>
    `
    videoboxDom.innerHTML = html


    let playDom = document.querySelector('.play')



    playDom.src = BASE_URL + playdata[len].videoUrl
    numlastDom.textContent = index


    nextDom.addEventListener('click', function () {
        console.log(len);
        if (len >= 3) {
            nextDom.removeEventListener('click', function () {

            })
        } else {
            len++
            numfirstDom.textContent = len + 1
            console.log(111);
            console.log(playdata[len]);
            playDom.src = BASE_URL + playdata[len].videoUrl
            numlastDom.textContent = index
            textDom.textContent = playdata[len].title
        }
    })

    backDom.addEventListener('click', function () {
        console.log(len);
        if (len < 1) {
            nextDom.removeEventListener('click', function () {
                
            })
        } else {
            len--
            numfirstDom.textContent = len + 1
            console.log(111);
            console.log(playdata[len]);
            playDom.src = BASE_URL + playdata[len].videoUrl
            numlastDom.textContent = index
            textDom.textContent = playdata[len].title
        }
    })

    pauseDom.addEventListener('click', function () {
     
        modelboxDom.style.display = 'block'
        playDom.pause();
        imgDom.src = BASE_URL + playdata[len].imgUrl
        titleDom.textContent = playdata[len].title
        continueDom.addEventListener('click',function(){

            modelboxDom.style.display = 'none'
            playDom.play();
        })
        pausedDom.addEventListener('click',function(){
            modelboxDom.style.display = 'none'
            location.href = 'sport.html'
        })

    })

    playDom.addEventListener("ended", function () {
        if (len <= 2) {
            len ++
            numfirstDom.textContent = len + 1
            playDom.src = BASE_URL + playdata[len].videoUrl
            numlastDom.textContent = index
            textDom.textContent = playdata[len].title
            playDom.play()
        }
    })


    setInterval(function() {
        let len =((playDom.currentTime / playDom.duration) * 100).toFixed(2);
        // console.log(len);
        colorboxDom.style.width = len + '%'
    }, 1);



})