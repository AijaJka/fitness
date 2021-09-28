require('../css/mine.styl')

document.ready(function () {
    untils.createFooter()
    let sportnumDom = document.querySelector('.sport')
    let calorienumDom = document.querySelector('.calorie')
    let usercontentDom = document.querySelector('.usercontent')
    let filepicDom = document.querySelector('.filepic')
    let headpicurlDom = document.querySelector('.headpicurl')
    let headpicDom = document.querySelector('.headpic')
    let headerDom = document.querySelector('header')
    let nicknameDom = document.querySelector('.nickname')
    let sportdataDom = document.querySelector('.sportdata')
    let user = JSON.parse(localStorage.getItem('user'))
    console.log(user);
    // console.log(JSON.stringify(user.userId));

    function getuserinfo() {
        http.get('/users/mysportsBadge/?userId=' + JSON.stringify(user.userId), function (res) {
            console.log(res);
            if (res.status == 0) {
                
                sportnumDom.textContent = res.data.sports.times
                calorienumDom.textContent = res.data.sports.calorie
                usercontentDom.textContent = res.data.user.nickname
                headpicurlDom.src = res.data.user.imgurl
                nicknameDom.textContent = res.data.user.sign
            }
        })
    }
    getuserinfo()

    // let data = {
    //     userId:user.userId,
    //     imgurl:user.imgurl,
    //     nickname:user.nickname,
    //     gender:user.gender,
    //     birthday:user.birthday,
    //     address:user.address,
    //     sign:user.sign,
    // }

    // function getinfon() {
    // http.post('/users/userEdit', data, function (res) {
    //     console.log(res);
    // })
    // }
    // getinfon()


    headpicDom.addEventListener('click', function (e) {
        filepicDom.click();
        console.log(e);
        e.stopPropagation();
        
    })
    headerDom.addEventListener('click',function(){
        console.log(123);
        location.href = 'changeInfo.html'
    })

  

    console.log(user);
    filepicDom.addEventListener('change', function () {

        $updateFile('/users/upload', 'imgurl', this.files[0], function (res) {
            console.log(res);
            console.log(res.data);
            
            console.log(filepicDom.files);
            headpicurlDom.src = BASE_URL + res.data
            console.log(headpicurlDom.src);
            let data = {
                userId: user.userId,
                imgurl: BASE_URL + res.data,
                // nikename:user.nikename
            }
        
            http.post('/users/userEdit', data, function (res) {
                console.log(res);
                if (res.status == 0) {
                    getuserinfo()
                }
            })
        })
    })


    sportdataDom.addEventListener('click',function(){
        location.href = 'MotionData.html'
    })


  

})