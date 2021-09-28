/**
 * 封装ajax
 * auther：刘治豪
 */
 const BASE_URL = 'http://139.9.177.51:8099' // 接口请求的 URL

 function objTOString(object) {
  let str = ''

  let arr = Object.keys(object)
  // console.log(arr);
  arr.forEach(function (item) {
      // console.log(arr);
      // console.log(item);
      str += `&${item}=${object[item]}`
      // console.log(str);
  })
  
  str = str.substring(1)
  str = '?' + str
  // console.log(str);
  return str
}

const http = {
  // get
  get: function (url, callback) {
      let xhr = new XMLHttpRequest()
      xhr.open('get', BASE_URL+url)
      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
              callback(JSON.parse(xhr.response))
          }
      }
      xhr.send()
  },

  //post
  post: function (url, data, callback) {
      let xhr = new XMLHttpRequest()
      xhr.open('post', BASE_URL+url)
      xhr.setRequestHeader('Content-Type', 'application/json')
      xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
              callback(JSON.parse(xhr.response))
          }
      }
      xhr.send(JSON.stringify(data))
  },

  //ajax
  ajax: function (obj) {
      if (obj.type === 'post') {
          this.post(obj.url, obj.data, obj.success)
      }
      if (obj.type === 'get') {
          this.get(obj.url+objTOString(obj.data), obj.success)
      }

  }
}


// 文件上传
function $updateFile(url, fdKey, fdValue, success) {
  const xhr = new XMLHttpRequest();

  const fd = new FormData();
  fd.append(fdKey, fdValue);

  xhr.open('POST', BASE_URL+url);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const resData = JSON.parse(xhr.responseText)
      success(resData)
    }
  }
  xhr.send(fd);
}


window.http = http;
window.BASE_URL = BASE_URL;
window.$updateFile = $updateFile;
