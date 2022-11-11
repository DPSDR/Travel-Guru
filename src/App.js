import { Route, Routes } from 'react-router-dom';
import './App.css';
import background from './images/Rectangle 1.png';
import Destination from './components/Pages/Destination/Destination';
import News from './components/Pages/News/News';
import Blog from './components/Pages/Blog/Blog';
import Contact from './components/Pages/Contact/Contact';
import Login from './components/Login/Login/Login';
import Footer from './components/Footer/Footer';
import NotFound from './components/Pages/NotFound/NotFound';
import Header from './components/Header/Header';


function App() {
  return (
    <div style={{ backgroundImage: `url(${background})` }} className="App">
      <Header></Header>
      <Routes>
        <Route path='/'></Route>
        <Route path='/destination' element={<Destination></Destination>}></Route>
        <Route path='/news' element={<News></News>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/footer' element={<Footer></Footer>}></Route>
        <Route path='/*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
