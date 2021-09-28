require('../css/course.styl')

document.ready(function () {
    console.log(location.search);

    let str = location.search

    let data = untils.strToData(str)
    // console.log(data);
    // console.log(data.id);
    let id = data.id
    console.log(id);

    let headerDom = document.querySelector('header')

    let handBtn = document.querySelector('button')

    http.get('/sports/allcourse', function (res) {
        console.log(res);
        let arr = res.data
        console.log(arr);
        let index = arr.findIndex(function (item, index) {
            return item.courseId == parseInt(id)
        })
        console.log(index);
        // console.log(arr[index].calorie);
        let textboxDom = document.querySelector('.textbox')
        let html = ''
        html = `
        <div class="blacktext">${arr[index].name}</div>
        <p class="datatextbox">
            <span class="calorienum">${arr[index].calorie}</span>
            <span class="calorietext">千卡</span>
            <span class="timenum">${arr[index].time}</span>
            <span class="timetext">分钟</span>
            <span class='peoplenum'>99.99w人练过 ></span>
        </p>
        `
        textboxDom.innerHTML = html
    })
    console.log(BASE_URL);
    http.get('/sports/courseDetail?id=' + id, function (res) {
        console.log(res.data.fragments);
        sessionStorage.setItem('playdata',JSON.stringify(res.data.fragments))
        
        let html2 = ''
        html2 = `
        <i class="iconfont icon-bofang"></i>
        <img src="${BASE_URL+res.data.imgurl}" alt="" style="width:100%; height: 340px;">
        
        `
        headerDom.innerHTML = html2
    })

    
    headerDom.addEventListener('click',function(e){
        // console.log(e.target.className);
        if(e.target.className=="iconfont icon-bofang"){
            console.log(111);

            location.href = './videoplay.html'
        }
    })

    handBtn.addEventListener('click',function(){
        location.href = './videoplay.html'
    })
})