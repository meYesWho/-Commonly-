import axios from 'axios'
import Vue from 'vue'
//需要安装mint-ui
import { Toast } from 'mint-ui';


// 默认超时设置
// axios.defaults.timeout = 50000;
 // 跨域请求，允许保存cookie
 // axios.defaults.withCredentials = true;
 
var service = axios.create({
  baseURL: 'http://chat.zp600.com/api/api/userupload',
  timeout: 5000,
  headers:{'Content-Type':'multipart/form-data'}
})
Vue.prototype.service = service
export default {
  //get请求，其他类型请求复制粘贴，修改method
  get(url, param) {
    return new Promise((cback, reject) => {
      service({
        method: 'get',
        url,
        params: param,
      }).then(res => {
        //axios返回的是一个promise对象 
        var res_code = res.status.toString();
        if (res_code.charAt(0) == 2) {
          cback(res);   //cback在promise执行器内部
        } else {
          console.log(res, '异常1')
        }
      }).catch(err => {
        if (!err.response) {
          console.log('请求错误')
          //Message是element库的组件，可以去掉
          Toast('网络请求错误请检查网络')
        } else {
          reject(err.response);
          console.log(err.response, '异常2')
        }
      })

    })
  },
  post(url, param) {
    console.log(url)
    return new Promise((cback, reject) => {
      service({
        method: 'post',
        url,
        params: param,
      }).then(res => {
        //axios返回的是一个promise对象 
        var res_code = res.status.toString();
        if (res_code.charAt(0) == 2) {
          cback(res);   //cback在promise执行器内部
        } else {
          console.log(res, '异常1')
        }
      }).catch(err => {
        if (!err.response) {
          console.log('请求错误')
          //Message是element库的组件，可以去掉
          Toast('网络请求错误请检查网络')
        } else {
          reject(err.response);
          console.log(err.response, '异常2')
        }
      })

    })
  },
  put(url, param) {
    return new Promise((cback, reject) => {
      service({
        method: 'put',
        url,
        params: param,
      }).then(res => {
        //axios返回的是一个promise对象 
        var res_code = res.status.toString();
        if (res_code.charAt(0) == 2) {
          cback(res);   //cback在promise执行器内部
        } else {
          console.log(res, '异常1')
        }
      }).catch(err => {
        if (!err.response) {
          console.log('请求错误')
          //Message是element库的组件，可以去掉
          Message({
            showClose: true,
            message: '请求错误',
            type: 'error'
          });
        } else {
          reject(err.response);
          console.log(err.response, '异常2')
        }
      })

    })
  },
  delete(url, param) {
    return new Promise((cback, reject) => {
      service({
        method: 'delete',
        url,
        params: param,
      }).then(res => {
        //axios返回的是一个promise对象 
        var res_code = res.status.toString();
        if (res_code.charAt(0) == 2) {
          cback(res);   //cback在promise执行器内部
        } else {
          console.log(res, '异常1')
        }
      }).catch(err => {
        if (!err.response) {
          console.log('请求错误')
          //Message是element库的组件，可以去掉
          Message({
            showClose: true,
            message: '请求错误',
            type: 'error'
          });
        } else {
          reject(err.response);
          console.log(err.response, '异常2')
        }
      })

    })
  },
  
} 