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
import { Upload } from './components/Upload'
import { DeleteUser } from './components/DeleteUser'
import { DeleteMusic } from './components/DeleteMusic';
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
      <div className="content justify-content-between d-flex flex-column">
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
      <Route path='deleteuser' element={<DeleteUser/>}/>}
      {loggedInUser?.role=='admin' &&
      <Route path='deleteMusic' element={<DeleteMusic/>}/>}
      </Routes>
      </div>


      <div className='footer d-flex flex-column'>
      <Box>
      <h1 style={{ color: "green", 
                   textAlign: "center", 
                   marginTop: "-50px" }}>
        SpotiCloud: Web Streaming Music Platform 
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading><span style={{ marginLeft: "10px",fontSize: "smaller", }}>Main Resources </span></Heading>
            <FooterLink href="https://www.npmjs.com/package/react-player" target='_blank' className='fab fa-npm'><span style={{ marginLeft: "10px",fontSize: "smaller", }}>ReactPlayer </span></FooterLink>
            <FooterLink href="https://www.npmjs.com/package/react-spotify-player" target='_blank' className='fab fa-npm'><span style={{ marginLeft: "10px",fontSize: "smaller", }}>SpotifyPlayer </span></FooterLink>
            
          </Column>
          <Column>
            <Heading><span style={{ marginLeft: "10px",fontSize: "smaller", }}>Services</span></Heading>
            <FooterLink href="https://spotify.com" target='_blank' className='fab fa-spotify'><span style={{ marginLeft: "10px",fontSize: "smaller", }}>Spotify</span></FooterLink>
            <FooterLink href="https://soundcloud.com" target='_blank' className='fab fa-soundcloud'><span style={{ marginLeft: "10px",fontSize: "smaller", }}>Soundcloud</span></FooterLink>
            <FooterLink href="https://music.youtube.com" target='_blank' className='fab fa-youtube'><span style={{ marginLeft: "10px",fontSize: "smaller", }}>Youtube Music</span></FooterLink>
          </Column>
          <Column>
            <Heading><span style={{ marginLeft: "10px",fontSize: "smaller", }}>Contact Us</span></Heading>
            <FooterLink href="https://github.com/holewente" target='_blank' className='fab fa-github'><span style={{ marginLeft: "10px",fontSize: "smaller", }}>holewente</span></FooterLink>
            <FooterLink href="https://github.com/milanszabo2001" target='_blank' className='fab fa-github'><span style={{ marginLeft: "10px",fontSize: "smaller", }}>milanszabo2001</span></FooterLink>
          </Column>
          <Column>
            <Heading><span style={{ marginLeft: "10px",fontSize: "smaller", }}>Social Media</span></Heading>
            <FooterLink href="https://facebook.com" target='_blank' className="fab fa-facebook-f">
               
                <span style={{ marginLeft: "10px",fontSize: "smaller", }}>
                  Facebook
                </span>
              
            </FooterLink>
            <FooterLink href="https://instagram.com" target='_blank' className="fab fa-instagram"> 
               
                <span style={{ marginLeft: "10px",fontSize: "smaller", }}>
                  Instagram
                </span>
              
            </FooterLink>
            <FooterLink href="https://twitter.com" target='_blank' className="fab fa-twitter">
               
                <span style={{ marginLeft: "10px",fontSize: "smaller", }}>
                  Twitter
                </span>
              
            </FooterLink>
            <FooterLink href="https://youtube.com" target='_blank' className="fab fa-youtube">
               
                <span style={{ marginLeft: "10px",fontSize: "smaller", }}>
                  Youtube
                </span>
              
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
