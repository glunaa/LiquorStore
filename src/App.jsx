
import './App.css'
import Nav from './components/Nav'
import Main from './components/Main'
import SmokeShop from './components/SmokeShop'
import {Route,Routes} from 'react-router-dom'
function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/smokeshop"element={<SmokeShop/>}></Route>
      </Routes>
    </>
  )
}

export default App
