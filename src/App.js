import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Messages from './components/Messages'
import MessageDetailsPage from "./components/MessageDetailsPage";
import Contact from './components/Contact'
import Navbar from './components/Navbar'
const App = () => {
  // const messages = [
  //   { id: 1, sender: 'John', content: 'Hello there!' },
  //   { id: 2, sender: 'Alice', content: 'How are you?' },
  //   { id: 3, sender: 'Bob', content: 'Nice to meet you!' }
  // ];
  return (
    <BrowserRouter>
    <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            {/* messages={messages} */}
            <Route path='/message' element={<Messages />}/>
            {/* messages={messages} */}
            <Route path='/message/:id' element={<MessageDetailsPage  />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App