import { Header } from './components/Header.jsx';
import { Routes, Route } from 'react-router';
import { Home } from './components/Pages/Home/Home.jsx'
import { Footer } from './components/Footer.jsx'
import { Rcp } from './components/Pages/Game-2/Rcp.jsx';

function App() {
  

  return (
    <>      
      <Header></Header>
      <Routes>
        
        <Route path='/' element={<Home></Home>}></Route> 
        <Route path='/Rcp' element={<Rcp></Rcp>}></Route> 

      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
