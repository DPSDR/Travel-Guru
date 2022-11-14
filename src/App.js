import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Destination from './components/Pages/Destination/Destination';
/* import News from './components/Pages/News/News';
import Blog from './components/Pages/Blog/Blog';
import Contact from './components/Pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import NotFound from './components/Pages/NotFound/NotFound'; */
import Header from './components/Header/Header/Header';
import Login from './components/Login/Login/Login';
import Home from './components/Pages/Home/Home';
import Register from './components/Login/Register/Register';



function App() {
  // const location = useLocation();
  // console.log(typeof (location.pathname))

  return (
    <div className='App'>


      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/destination' element={<Destination></Destination>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>

        {/* <Route path='/news' element={<News></News>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/footer' element={<Footer></Footer>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
