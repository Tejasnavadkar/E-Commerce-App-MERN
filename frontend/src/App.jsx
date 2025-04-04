import './App.css'
import LoginPage from './pages/LoginPage'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SignupPage from './pages/SignupPage'
import Home from './pages/HomePage'


function App() {

  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/signup' element={<SignupPage />} />
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
