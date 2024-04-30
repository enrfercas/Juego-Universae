import { Header } from './components/Header.jsx';
import { Routes, Route } from 'react-router';
import { Home } from './components/Pages/Home/Home.jsx'
import { Footer } from './components/Footer.jsx'
import { Helicop } from './components/Pages/Game-1/Helicop.jsx';

function App() {
  

  return (
    <>      
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>        
        <Route path='/Helicop' element={<Helicop></Helicop>}></Route>        
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
