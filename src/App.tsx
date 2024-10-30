
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import HomeMain from './components/Main/HomeMain/Main'
import Main from './components/Main/HomeMain/Main'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
     <Header></Header>
     <Routes>
        <Route path='/' element={<HomeMain></HomeMain>}></Route>
        <Route path='/shop' element={<h1>Comeing soon</h1>}></Route>
     </Routes>
     <Footer></Footer>
    </>
  )
}

export default App
