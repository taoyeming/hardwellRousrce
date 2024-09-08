import React, { useMemo } from "react"
import { Layout, Menu, Grid, Button, Popover } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import logo from '../asset/logo.png';

const { useBreakpoint } = Grid;

const { Header } = Layout;

const Component = () => {

  const screens = useBreakpoint();

  const isMobile = !screens.md;

  const menus = useMemo(() => {
    const items = [
      {
        label: <a href="https://apt.wanjitech.com/">越狱源</a>,
        key: '越狱源',
      },
      {
        label: <a href="/source">资源列表</a>,
        key: '资源列表',
      },
      {
        label: <a href="/tutorial">教程列表</a>,
        key: '教程列表',
      },
      {
        label: <a href="https://app.wanjitech.com/applock/querycode.php">激活码查询</a>,
        key: '激活码查询',
      },
      {
        label: <a href="/follow">关注站长</a>,
        key: '关注站长',
      }
    ]

    const menus = <Menu
      mode={isMobile ? "inline" : "horizontal"}
      items={items}
      onClick={() => {
        
      }}
      className="bg-white justify-end flex-1"
    />
    if (isMobile) {
      return <Popover content={menus} trigger="click" >
        <Button
          type="text"
          icon={<MenuOutlined />}
          className='mt-auto mb-auto'
        />
      </Popover>
    }
    return menus
  }, [isMobile])

  return <Header className='bg-white sticky top-0 shadow-md pl-1 pr-1 flex justify-between'>
    <a className="flex w-32 min-w-32" href="/">
      <img src={logo} alt="logo" className="h-11 mt-auto mb-auto" />
      <span>玩机资源网</span>
    </a>
    {menus}

  </Header>
}

export default Component