import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    pages: [
      '^pages/default/main',
      'pages/mine/main',
      'pages/bind/main',
      'pages/star/main',

    ],
    //整个头部的界面样式设置↓
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#1b82d1',
      navigationBarTitleText: '图书馆服务平台',
      navigationBarTextStyle: '#fefefe'
    },
    //底部导航栏的设置↓
    tabBar: {
      color: '#aaa',
      selectedColor: '#1b82d1',
      backgroundColor: '#fff',
      list: [{
          'pagePath': 'pages/default/main',
          'text': '首页',
          'iconPath': '/static/images/shouye00.png',
          'selectedIconPath': '/static/images/shouye01.png'
        }, {
          'pagePath': 'pages/search/main',
          'text': '热搜',
          'iconPath': '/static/images/hot00.png',
          'selectedIconPath': '/static/images/hot01.png'
        }, {
          'pagePath': 'pages/mine/main',
          'text': '我的',
          'iconPath': '/static/images/my00.png',
          'selectedIconPath': '/static/images/my01.png'
        }

      ]
    }
  }
}
