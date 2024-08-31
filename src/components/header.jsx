import React from "react"
import { Layout, Menu } from 'antd';

const { Header } = Layout;

const Component = () => {
  return <Header className='bg-white sticky top-0 shadow-md pl-1 pr-1'>
    <Menu
      mode="horizontal"
      items={[
        {
          label: '首页',
          key: 'home',
        },
        {
          label: '测试测试长度',
          key: 'test',
        },
        {
          label: '测试测试长度',
          key: 'test',
        },        {
          label: '测试测试长度',
          key: 'test',
        },        {
          label: '测试测试长度',
          key: 'test',
        },        {
          label: '测试测试长度',
          key: 'test',
        },        {
          label: '测试测试长度',
          key: 'test',
        },        {
          label: '测试测试长度',
          key: 'test',
        },        {
          label: '测试测试长度',
          key: 'test',
        },        {
          label: '测试测试长度',
          key: 'test',
        },        {
          label: '测试测试长度',
          key: 'test',
        },
      ]}
      className='w-full justify-end border-0 bg-transparent'
    />
  </Header>
}

export default Component