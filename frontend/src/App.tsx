import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import AddTodo from './pages/Todo'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Navigate to="/home" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/AddTodo' element={<AddTodo />} />
      </Routes>
    </BrowserRouter>
  )
}
