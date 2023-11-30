import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import TaskPage from './pages/TaskPage'
import TaskFormPage from './pages/TaskFormPage'
import Navigation from './components/Navigation'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="container mx-auto">
          <Navigation />
          <Routes>
            <Route path='/' element={<Navigate to={'/tasks'} />}></Route>
            <Route path='/tasks' element={<TaskPage />}></Route>
            <Route path='/task-create' element={<TaskFormPage />}></Route>
            <Route path='/tasks/:id' element={<TaskFormPage />}></Route>
          </Routes>
          <Toaster />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
