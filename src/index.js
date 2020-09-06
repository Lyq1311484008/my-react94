import React from 'react'
import ReactDOM from 'react-dom'
import '@/styles/index.less'
import App from "@/pages/App"
import { BrowserRouter } from "react-router-dom"

// andt配置
import { ConfigProvider } from 'antd';
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from 'antd/es/locale/zh_CN';
import 'antd/dist/antd.css';


ReactDOM.render(
  <ConfigProvider locale={zhCN}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ConfigProvider>,
  document.getElementById('root')
)

