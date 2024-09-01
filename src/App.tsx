import { Outlet } from 'react-router-dom'
import HeaderComponent from './Components/HeaderComponent/HeaderComponent'
import './App.css'

function App() {

  return (
    <>
        <HeaderComponent></HeaderComponent>
        <Outlet></Outlet>
    
    </>
  )
}

export default App
