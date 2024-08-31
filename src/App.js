import React from 'react';
import Home from './components/home';
import NotFound from './components/notFound';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
import Header from './components/header';
import Footer from './components/footer';
const { Content } = Layout;

const App = () => (
  <BrowserRouter>
    <ConfigProvider
      theme={{}}
    >
      <Layout className='min-h-screen'>
        <Header />
        <Content className='flex-1 bg-white'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Content>
        <Footer />
      </Layout>
    </ConfigProvider>
  </BrowserRouter>
)

export default App
