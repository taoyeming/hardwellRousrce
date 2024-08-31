import React from 'react';
import { Layout } from 'antd';

const { Footer } = Layout;

const Component = () => {
  return <Footer className='bg-black'>
    <span className='ml-auto mr-auto w-fit flex text-white'>
      footer
    </span>
  </Footer>
}

export default Component;