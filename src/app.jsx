import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/help/aboutUs/index',
      'pages/help/helpPage/index',
      'pages/help/question/index',
      'pages/help/serviceGuarantee/index',
    ],
    // subpackages: [
    //   {
    //     'root': 'pages/help',
    //     'name': '我的',
    //     'pages': [
    //       'aboutUs/index',
    //       'helpPage/index',
    //       'question/index',
    //       'serviceGuarantee/index',
    //     ]
    //   },
    // ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#999',
      selectedColor: '#2992FA',
      backgroundColor: '#FFFFFF',
      list: [
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: './assets/Home.png',
          selectedIconPath: './assets/Home-select.png'
        },
        {
          pagePath: 'pages/help/question/index',
          text: '常见问题',
          iconPath: './assets/Project.png',
          selectedIconPath: './assets/Project-select.png'
        },
        {
          pagePath: 'pages/help/serviceGuarantee/index',
          text: '服务保障',
          iconPath: './assets/Project.png',
          selectedIconPath: './assets/Project-select.png'
        },
        {
          pagePath: 'pages/help/aboutUs/index',
          text: '我的',
          iconPath: './assets/help.png',
          selectedIconPath: './assets/help-select.png'
        }
      ]
    },
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
