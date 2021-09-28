/**
 * 工具函数
 */
require('../../css/toast.styl')

let untils = {
    toast: function (x,str) {
        // 创建节点
        let div = document.createElement('div')
        let bodyDom = document.querySelector('body')
        div.className = 'toast'
        let html  = `
        <div class="toast">
            <div class="toasticon iconfont icon-${x}"></div>
            <div class="toasttext">${str}</div>
        </div>
        `
        div.innerHTML = html
        bodyDom.appendChild(div)

        // 两秒之后自身删除
        setTimeout(function(){
            div.remove()
        },2000)
    },


    createFooter: function(page){
      let footer = document.createElement('footer');
      let html = `
      <footer>
      <a href="./home.html" class='${page === 'home' ? ' active' : ''}'>
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
        </a>
  
  
      <a href="./sport.html" class='${page === 'sport' ? ' active' : ''}'>
      <i class="iconfont icon-ziyuan5"></i>
      <span>运动</span>
        </a>
  
  
      <a href="./mine.html" class='${page === 'mine' ? ' active' : ''}'>
      <i class="iconfont icon-wode"></i>
      <span>我的</span>
        </a>
        </footer>
      `
      footer.innerHTML = html;
      document.querySelector('body').appendChild(footer);
    },


    strToData:function(str){
      let searchStr = str.substr(1);
      let searchArr = searchStr.split('&')
      let obj = {}
      for (let a = 0; a < searchArr.length; a++) {
          let arr = searchArr[a].split("=")
          obj[arr[0]] = arr[1]
      }
      return obj
    },



}
window.untils = untils