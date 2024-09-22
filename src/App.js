import React from 'react';
import Home from './components/home';
import NotFound from './components/notFound';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ConfigProvider, Layout } from 'antd';
import Header from './components/header';
import Footer from './components/footer';
import Source from './components/source';
import Follow from './components/follow';
import Tutorial from './components/tutorial';
const { Content } = Layout;

const App = () => (
  <BrowserRouter>
    <ConfigProvider
      theme={{}}
    >
      <Layout className='min-h-screen'>
        <Header />
        <Content className='flex-1 relative overflow-hidden bg-shigong bg-center bg-cover bg-no-repeat bg-white'>
          <div className="backdrop-blur-sm ml-auto mr-auto bg-white/50 mt-5 mb-5 w-4/5 rounded-lg p-3 shadow-md text-center min-h-96">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/source" element={<Source />} />
              <Route path="/follow" element={<Follow />} />
              <Route path='/tutorial' element={<Tutorial/>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </Content>
        <Footer />
      </Layout>
    </ConfigProvider>
  </BrowserRouter>
)

export default App
