// const { data } = require('autoprefixer');

require('../css/register.styl')

document.ready(function () {
    let str = ''

    let hintmsgDom = document.querySelector('.hintmsg')
    let telDom = document.querySelector('.rightinput')
    let verificationDom = document.querySelector('.verification-left')
   
    let pwdinpDom = document.querySelector('.pwdinp')
    let pwdinpAgainDom = document.querySelector('.pwdinp-again')
    let handDom = document.querySelector('.hand')

    let pwdloginDom = document.querySelector('.pwdlogin')
    /*不传值，统一走默认值*/
    // let captcha1 = new CaptchaMini();
    // captcha1.draw(document.querySelector('#captcha1'),function(res){
    //     console.log(res);
    // });
    let captcha2 = new CaptchaMini({
        lineWidth: 1,   //线条宽度
        lineNum: 3,       //线条数量
        dotR: 2,          //点的半径
        dotNum: 10,       //点的数量
        fontSize: 30,           //字体大小
        length: 4    //验证码长度
    });
    captcha2.draw(document.querySelector('#captcha1'), function (res) {
        console.log(res);
        str = res
    });

    pwdloginDom.addEventListener('click',function(){
        location.href = 'login.html'
    })
  
 

    

    let telReg = /^1[3-9][0-9]{9}$/
    handDom.addEventListener('click', function () {

        
        
        if (telDom.value  && verificationDom.value  && pwdinpDom.value && pwdinpAgainDom.value) {
            if (!telReg.test(telDom.value)) {
                untils.toast("cuowu", "手机格式有误")
                return;
            } else {
                hintmsgDom.textContent = ''
            }
            
            if((verificationDom.value).toLowerCase() != (str).toLowerCase()){
                untils.toast("cuowu", "验证码错误")
                return;
            }else{
                hintmsgDom.textContent = ''
            }

            if(pwdinpDom.value != pwdinpAgainDom.value){
               
                untils.toast("cuowu", '两次密码不一致')
                return;
            }else{
                hintmsgDom.textContent = ''
            }

            let data ={
                account:telDom.value,
                password:pwdinpDom.value
            }
            http.post("/users/add",data,function(res){
                if(res.status == 0){
                    setInterval(function(){
                        location.href = 'login.html'
                    },2000)
                   
                    untils.toast("zhengque1", '注册成功,2s后跳转页面')
                }else{
                    untils.toast("cuowu", res.msg)
                }
            })

            
        }else{
            untils.toast("cuowu",'您的用户信息不完整')
        }


    })



})