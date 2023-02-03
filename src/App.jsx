import './App.css';
import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {About} from './components/About'
import {Home} from './components/Home'
import { Products } from './components/Products';
import { Contacts } from './components/Contacts';
import {Routes,Route} from 'react-router-dom'
import { MyNavbar } from './components/MyNavbar';
import {Product} from './components/Product'
import { Login } from './components/Login';
import { Register } from './components/Register'
import {UserProfile} from './components/UserProfile'
import {QueryClient,QueryClientProvider} from 'react-query'
import {Books} from './components/Books'
import { Upload } from './components/Upload'
import Footer from 'rc-footer';
import "./Footer.less"


const queryClient = new QueryClient()



function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  console.log(loggedInUser,"loggedInUser")
  return (
    <QueryClientProvider client={queryClient}>
      <MyNavbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
      <div className='holder d-flex justify-content-center row'>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contacts' element={<Contacts/>} />
      <Route path='products' element={loggedInUser?.id? <Products/> : <Login setLoggedInUser={setLoggedInUser}/>} />
      <Route path='products/:id' element={loggedInUser?.id? <Product/> : <Login setLoggedInUser={setLoggedInUser}/>} />
      <Route path='login' element={<Login setLoggedInUser={setLoggedInUser}/>} />
      <Route path='register' element={<Register/>} />
      <Route path='upload' element={loggedInUser?.id? <Upload/> : <Login setLoggedInUser={setLoggedInUser}/>} />
      {loggedInUser?.username && 
      <Route path='userProfile' 
      element={<UserProfile loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>}/>}
      {loggedInUser?.role=='admin' &&
      <Route path='books' element={<Books/>}/>}
      </Routes>
      

      <Footer
        maxColumnsPerRow={4}
        columns={[
          {
            title: '相关资源',
            items: [
              {
                title: 'Ant Design Pro',
                url: 'https://pro.ant.design/',
                openExternal: true,
              },
              {
                title: 'Ant Design Mobile',
                url: 'https://mobile.ant.design/',
                openExternal: true,
              },
              {
                title: 'Kitchen',
                url: 'https://kitchen.alipay.com/',
                description: 'Sketch 工具集',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                title: 'Ant Design Pro',
                url: 'https://pro.ant.design/',
                openExternal: true,
              },
              {
                title: 'Ant Design Mobile',
                url: 'https://mobile.ant.design/',
                openExternal: true,
              },
              {
                title: 'Kitchen',
                url: 'https://kitchen.alipay.com/',
                description: 'Sketch 工具集',
              },
            ],
          },
          {
            title: '帮助',
            items: [
              {
                title: 'Ant Design Pro',
                url: 'https://pro.ant.design/',
                openExternal: true,
              },
              {
                title: 'Ant Design Mobile',
                url: 'https://mobile.ant.design/',
                openExternal: true,
              },
              {
                title: 'Kitchen',
                url: 'https://kitchen.alipay.com/',
                description: 'Sketch 工具集',
              },
            ],
          },
          {
            icon: (
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
                alt="more products"
              />
            ),
            title: '更多产品',
            items: [
              {
                icon: (
                  <img
                    src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
                    alt="yuque"
                  />
                ),
                title: '语雀',
                url: 'https://yuque.com',
                description: '知识创作与分享工具',
                openExternal: true,
              },
              {
                icon: (
                  <img
                    src="https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png"
                    alt="yuque"
                  />
                ),
                title: '云凤蝶',
                url: 'https://yunfengdie.com',
                description: '中台建站平台',
                openExternal: true,
              },
            ],
          },
          {
            title: '相关资源',
            items: [
              {
                title: 'Ant Design Pro',
                url: 'https://pro.ant.design/',
                openExternal: true,
              },
              {
                title: 'Ant Design Mobile',
                url: 'https://mobile.ant.design/',
                openExternal: true,
              },
              {
                title: 'Kitchen',
                url: 'https://kitchen.alipay.com/',
                description: 'Sketch 工具集',
              },
            ],
          },
          {
            title: '社区',
            items: [
              {
                title: 'Ant Design Pro',
                url: 'https://pro.ant.design/',
                openExternal: true,
              },
              {
                title: 'Ant Design Mobile',
                url: 'https://mobile.ant.design/',
                openExternal: true,
              },
              {
                title: 'Kitchen',
                url: 'https://kitchen.alipay.com/',
                description: 'Sketch 工具集',
              },
            ],
          },
          {
            title: '帮助',
            items: [
              {
                title: 'Ant Design Pro',
                url: 'https://pro.ant.design/',
                openExternal: true,
              },
              {
                title: 'Ant Design Mobile',
                url: 'https://mobile.ant.design/',
                openExternal: true,
              },
              {
                title: 'Kitchen',
                url: 'https://kitchen.alipay.com/',
                description: 'Sketch 工具集',
              },
            ],
          },
          {
            icon: (
              <img
                src="https://gw.alipayobjects.com/zos/rmsportal/nBVXkrFdWHxbZlmMbsaH.svg"
                alt="more products"
              />
            ),
            title: '更多产品',
            items: [
              {
                icon: (
                  <img
                    src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg"
                    alt="yuque"
                  />
                ),
                title: '语雀',
                url: 'https://yuque.com',
                description: '知识创作与分享工具',
                openExternal: true,
              },
              {
                icon: (
                  <img
                    src="https://gw.alipayobjects.com/zos/rmsportal/uHocHZfNWZOdsRUonZNr.png"
                    alt="yuque"
                  />
                ),
                title: '云凤蝶',
                url: 'https://yunfengdie.com',
                description: '中台建站平台',
                openExternal: true,
              },
            ],
          },
        ]}
        bottom="Made with ❤️ by AFX"
      />
      
    </div>
    </QueryClientProvider>
    

  );
  
}


export default App;
