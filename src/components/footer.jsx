import React from 'react';
import { Button, Layout } from 'antd';

const { Footer } = Layout;

const Component = () => {
  return <Footer className='p-2'>
    <Button type='link' className='ml-auto mr-auto w-fit flex'>
      浙ICP备2024107647号-1
    </Button>
  </Footer>
}

export default Component;