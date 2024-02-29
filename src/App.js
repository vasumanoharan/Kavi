
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer';
import Heropage from './components/Heropage/Heropage';

import Card from './components/cards/Card';

function App() {
  return (
    <div style={{backgroundImage:'linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))'}}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Heropage />}></Route>
          <Route path='/card/:id' element={<Card />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
