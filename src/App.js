import React from 'react'
import { HashRouter,Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Messages from './Pages/Messages'
import MessageDetailsPage from "./Pages/MessageDetailsPage";
import Contact from './Pages/Contact'
import Navbar from './components/Navbar'
import PageNotFound from './Pages/PageNotFound'
const App = () => {
  return (
    <HashRouter>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/message' element={<Messages />}/>
            <Route path='/message/:id' element={<MessageDetailsPage  />}/>
            <Route path="*"  element={<PageNotFound />}  />
        </Routes>
    </HashRouter>
  )
}

export default App