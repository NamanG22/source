import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Chatbot from './components/Chatbot/Chatbot'
import SupplierDiscovery from './components/SupplierDiscovery/SupplierDiscovery'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/supplier-discovery" element={<SupplierDiscovery />} />
      </Routes>
    </Router>
  )
}

export default App

