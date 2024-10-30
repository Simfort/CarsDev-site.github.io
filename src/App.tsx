
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
     </Routes>
     <Footer></Footer>
    </>
  )
}

export default App
