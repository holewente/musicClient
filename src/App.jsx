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

const queryClient = new QueryClient()


function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  console.log(loggedInUser,"loggedInUser")
  return (
    <QueryClientProvider client={queryClient}>
      <MyNavbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
      <div className='holder d-flex justify-content-center'>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contacts' element={<Contacts/>} />
      <Route path='products' element={<Products/>} />
      <Route path='products/:id' element={<Product/>} />
      <Route path='login' element={<Login setLoggedInUser={setLoggedInUser}/>} />
      <Route path='register' element={<Register/>} />
      {loggedInUser?.username && 
      <Route path='userProfile' 
      element={<UserProfile loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>}/>}
      {loggedInUser?.role=='admin' &&
      <Route path='books' element={<Books/>}/>}
      </Routes>
    </div>
    </QueryClientProvider>

  );
}

export default App;
