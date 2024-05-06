import { Header } from './components/Header.jsx';
import { Routes, Route } from 'react-router';
import { Home } from './components/Pages/Home/Home.jsx'
import { Footer } from './components/Footer.jsx'
import { Rcp } from './components/Pages/Game-2/Rcp.jsx';
import { Helicop } from './components/Pages/Game-1/Helicop.jsx';
import {Bomberos} from './components/Pages/Game-6/Bomberos.jsx';

import { Robot } from './components/Pages/Game-4/Robot.jsx';
import { Fire } from './components/Pages/Game-3/Fire.jsx';

function App() {
  

  return (
    <>
      <Header></Header>
      <Routes>
        
        <Route path='/' element={<Home></Home>}></Route> 
        <Route path='/Rcp' element={<Rcp></Rcp>}></Route>     
        <Route path='/Helicop' element={<Helicop></Helicop>}></Route> 
        <Route path='/Fire' element={<Fire></Fire>}></Route> 

        <Route path="/Bomberos" element={<Bomberos></Bomberos>}></Route> 
        <Route path='/Robot' element={<Robot></Robot>}></Route>              
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App
