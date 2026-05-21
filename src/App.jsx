import { React} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Login from './pages/Login'
import Devis from './pages/Devis'
import Dashboard from './pages/Dashboard'
function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register />} />
        <Route path="/signIn" element={<Login />} />
        <Route path='/devis' element={<Devis/>} />
        <Route path="/dashboard/*" element={<Dashboard />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
