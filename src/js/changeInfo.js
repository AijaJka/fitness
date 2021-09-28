require('../css/changeInfo.styl')
document.ready(function () {
    let genderDom = document.querySelector('#gender')
    let gendercheckDom = document.querySelector('#js_cell_tl1_link')
    let birthdayDom = document.querySelector('#years')
    let birthdaytextDom = document.querySelector("#js_cell_tl2_link")
    let provinceDom = document.querySelector('.province')
    let provincetextDom = document.querySelector('.provincetext')
    let cityDom = document.querySelector('.city')
    let citytextDom = document.querySelector('.citytext')
    let nikenameDom = document.querySelector('.weui-input')
    let signDom = document.querySelector('.weui-textarea')

    let handBtn = document.querySelector('.weui-btn')
    let user = JSON.parse(localStorage.getItem('user'))
    console.log(user);

 

    console.log(untils.toast);

    let obj = {
        nickname: '',
        gender: '',
        birthday: '',
        sign: '',
        address: [],
        userId: user.userId,
    }

    // 性别
    genderDom.addEventListener('click', function () {
        weui.picker([{
            label: '男',
            value: "男"
        }, {
            label: '女',
            value: "女"
        }], {

            onConfirm: function (result) {
                console.log(result);

                gendercheckDom.textContent = result[0].label
                obj.gender = result[0].label
                untils.toast("zhengque1", "修改信息成功")
            },
            title: '请选择性别'
        });
    })

    //生日
    birthdayDom.addEventListener('click', function () {
        weui.datePicker({
            start: 1990,
            end: new Date(),
            onConfirm: function (result) {
                let mouthnum = result[1].value

                birthdaytextDom.textContent = `
                ${result[0].value}-${mouthnum < 10 ? '0' + mouthnum : mouthnum}-${result[2].value}
                `
            },
            title: '请选择生日'
        });
    })
    let pid = ''

    // 省份
    provinceDom.addEventListener('click', function () {
        http.get('/address/province', function (res) {
            console.log(res);
            // pid = res.data[0].pid
            arr = res.data.map(function (item) {

                return {
                    value: item.addressId,
                    label: item.name,
                }

            })
            arr.splice(12, 1)
            weui.picker(arr, {

                onConfirm: function (result) {
                    console.log(result);
                    pid = parseInt(result[0].value)
                    console.log(pid);
                    provincetextDom.textContent = result[0].label

                },
                title: '请选择省份'
            })
        })
    })



    // 城市
    cityDom.addEventListener('click', function () {
        if (!pid) {
            untils.toast("cuowu", "请确认省份")
        } else {
            console.log(typeof pid);
            console.log('/address/city' + pid);
            http.get('/address/city/' + pid, function (res) {
                console.log(res.data);
                let arr = res.data.map(function (item) {
                    return {
                        value: item.addressId,
                        label: item.name,
                    }
                })
                weui.picker(arr, {

                    onConfirm: function (result) {
                        console.log(result);
                        citytextDom.textContent = result[0].label
                    },
                    title: '请选择城市'
                })
            })
        }



    })






    console.log(localStorage.getItem("user"));

    // function fn() {

    // }
    function getuserinfo() {
        http.get('/users/accountinfo?userId=' + JSON.stringify(user.userId), function (res) {
            console.log(res);
            let str = res.data.address
            let a = str.split(',')[0]
            let b = str.split(',')[1]
            console.log(a, b);
            let c = res.data.birthday
            let d = c.substring(0, 10)

            console.log(d);
            if (res.status == 0) {
                console.log(res.data.nickname);
                signDom.value = res.data.sign
                nikenameDom.value = res.data.nickname
                provincetextDom.textContent = a
                citytextDom.textContent = b
                gendercheckDom.textContent = res.data.gender
                birthdaytextDom.textContent = d
            }
        })
    }
    getuserinfo()


    handBtn.addEventListener('click', function () {
        obj.birthday = birthdaytextDom.textContent
        obj.nickname = nikenameDom.value
        obj.gender = gendercheckDom.textContent
        obj.address[0] = provincetextDom.textContent
        obj.address[1] = citytextDom.textContent
        obj.sign = signDom.value
        console.log(obj);
        data = obj

        http.post('/users/userEdit', data, function (res) {

            console.log(res);
            if (res.status == 0) {
                getuserinfo()
                untils.toast("zhengque1", "修改信息成功")

                location.href = 'mine.html'
            }else{
                untils.toast("cuowu", res.msg)
            }
        })
        console.log(obj);



    })







})