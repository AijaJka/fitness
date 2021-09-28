require('../css/login.styl')
require('./commonCSS.js/utils')
console.log(untils.toast);
document.ready(function () {
    let userDom = document.querySelector('.user')
    let pwdDom = document.querySelector('.pwd')
    let handDom = document.querySelector('.hand')
   
    let pwdregisterDom = document.querySelector('.pwdregister')
    handDom.addEventListener('click', function () {
        console.log(untils);
        let data = {
            account: userDom.value,
            password: pwdDom.value,
        }

        if (userDom != '' && pwdDom != '') {
            http.post('/users/login', data, function (res) {

                if (res.status == 0) {
                    setInterval(function () {
                        location.href = 'home.html'
                    }, 2000)
                    localStorage.setItem('user', JSON.stringify(res.data.user))
                    console.log(res.data.user);
                    untils.toast("zhengque1", res.msg)
                } else {
                    untils.toast("cuowu", res.msg)
                   
                }
            })
        } else {
            untils.toast("cuowu", '请输入信息')
        }
    })

    pwdregisterDom.addEventListener('click',function(){
        location.href = 'register.html'
    })

})
