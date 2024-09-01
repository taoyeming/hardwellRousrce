import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const Component = () => {
  return <Footer className='p-2'>
    <a className='ml-auto mr-auto w-fit flex' href="https://beian.miit.gov.cn">
      浙ICP备2024107647号-3
    </a>
  </Footer>
}

export default Component;