import { Header } from './components/Header.jsx';
import { Routes, Route } from 'react-router';
import { Home } from './components/Pages/Home/Home.jsx'
import { Footer } from './components/Footer.jsx'
import {Bomberos} from './components/Pages/Game-6/Bomberos.jsx';


function App() {
  

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/Bomberos" element={<Bomberos></Bomberos>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App
