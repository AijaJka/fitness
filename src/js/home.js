require('../css/home.styl')

document.ready(function () {
  console.log(untils);
  untils.createFooter()

  var mySwiper = new Swiper('.swiper-container', {
    // direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项

    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
  })

  let user = JSON.parse(localStorage.getItem('user'))
  console.log(user.userId);
  let punchcardbtnDom = document.querySelector('.punchcardbtn')

  function getdata() {
    http.get('/headPageInfo?userId=' + user.userId, function (res) {
      document.querySelector('.rankingnum').textContent = res.data.rank
      document.querySelector('.punchnum').textContent = res.data.punchIn
      if (res.data.isPunch == 'false') {
        punchcardbtnDom.style.display = 'block'
      } else {
        punchcardbtnDom.style.display = 'none'
      }
    })
  }
  getdata()
  punchcardbtnDom.addEventListener('click', function () {
    http.get('/clockIn?userId='+user.userId, function (res) {

      console.log(res);
      if (res.status == 1) {

        untils.toast(1, '打卡成功')
        getdata()
      } else {

        untils.toast(0, '打卡失败')

      }
    })
  })



})


