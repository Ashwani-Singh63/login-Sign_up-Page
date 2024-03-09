import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Registration from './Components/Registration'
import Login from './Components/Login'
import NotFound from './Components/NotFound'

function App() {

  return (
    <>

      <BrowserRouter>

        <Routes>

          <Route  path="/" element={<Registration />} />

          <Route  path="/login" element={<Login />} />

          <Route  path="/registration" element={<Registration />} />

          <Route  path='*' element={<NotFound />} />

        </Routes>
      
      </BrowserRouter>


    </>
  )
}

export default App
