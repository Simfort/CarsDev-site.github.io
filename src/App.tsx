
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import HomeMain from './components/Main/HomeMain/Main'
import Main from './components/Main/HomeMain/Main'

function App() {
  return (
    <>
     <Header></Header>
     <Routes>
        <Route path='/' element={<HomeMain></HomeMain>}></Route>
     </Routes>
    </>
  )
}

export default App
