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
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";


const queryClient = new QueryClient()



function App() {
  const [loggedInUser,setLoggedInUser]=useState({})
  console.log(loggedInUser,"loggedInUser")
  return (
    <QueryClientProvider client={queryClient}>
      <MyNavbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>
      <div className="content d-flex flex-column">
      <div className='holder d-flex justify-content-center'>
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
      </div>


      <div className='loginregisterpanel d-flex flex-column'>
      <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        SpotiCloud: Web Streaming Music Platform 
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>About Us</Heading>
            <FooterLink href="#">Aim</FooterLink>
            <FooterLink href="#">Vision</FooterLink>
            <FooterLink href="#">Testimonials</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Writing</FooterLink>
            <FooterLink href="#">Internships</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Teaching</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Us</Heading>
            <FooterLink href="#">Uttar Pradesh</FooterLink>
            <FooterLink href="#">Ahemdabad</FooterLink>
            <FooterLink href="#">Indore</FooterLink>
            <FooterLink href="#">Mumbai</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  Twitter
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: "10px" }}>
                  Youtube
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
      </div>
    </div>
    </QueryClientProvider>
    

  );
  
}


export default App;
