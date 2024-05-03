import { Header } from './components/Header.jsx';
import { Routes, Route } from 'react-router';
import { Home } from './components/Pages/Home/Home.jsx'
import { Footer } from './components/Footer.jsx'
import { Robot } from './components/Pages/Game-4/Robot.jsx';

function App() {
  

  return (
    <>      
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>  
        <Route path='/Robot' element={<Robot></Robot>}></Route>              
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
