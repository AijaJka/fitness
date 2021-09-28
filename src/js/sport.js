

require('../css/sport.styl')
document.ready(function () {
    untils.createFooter()
    console.log(untils);
    let blacktextDom = document.querySelector('.blacktext')
    let eeetextDom = document.querySelector('.eeetext')
    let user = JSON.parse(localStorage.getItem('user'))
    let coursecontentDom = document.querySelectorAll('.coursecontent')
    console.log(user);
    console.log(BASE_URL);
    http.get('/sports/allcourse', function (res) {
        // console.log(res.data);
        // blacktextDom.textContent = res.data[0].name
        // eeetextDom.textContent = res.data[0].desc
        let textnewDom = document.querySelector('.text-new')
        let html1 = ''
        html1 = `
        <a href="./course.html?id=${res.data[0].courseId}">
        <span>最新课程</span>
        <div class="outbox-new">
        <div class="new-top"><img src="${BASE_URL + res.data[0].imgurl}" alt="" style="width:372.95px; height: 140px;"></div>
            <div class="new-bottom">
                <p class="blacktext">${res.data[0].name}</p>
                <p class="eeetext">${res.data[0].desc}</p>
            </div>
        </div>
        </a>
        `
        textnewDom.innerHTML = html1
        
        let arr = res.data
        arr.splice(0, 1)
        console.log(arr);

        let html = ''
        for(let b=0;b<coursecontentDom.length;b++){
           
            for (let a = 0; a < arr.length; a++) {
                html = `
                
                <a href="./course.html?id=${arr[b].courseId}">
                <img src="${BASE_URL + arr[b].imgurl}" alt="" style="width:372.95px; height: 140px;">
                    <p class='blacktext'>${arr[b].name}</p>
                    <p class='eeetext'>${arr[b].desc}</p>
                    </a>
                    `
            }
            coursecontentDom[b].innerHTML = html
        }

        let a = location.search
        console.log(a);
        // untils.strToData()
        

     
    })


})