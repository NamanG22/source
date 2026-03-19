import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import Home from './components/Home/Home'
import Chatbot from './components/Chatbot/Chatbot'
import SupplierDiscovery from './components/SupplierDiscovery/SupplierDiscovery'
import AuthPage from './pages/AuthPage'
import ProductPediaPage from './pages/ProductPediaPage'
import CountryPage from './pages/CountryPage'
import BlogPage from './pages/BlogPage'
import CompetitorPage from './pages/CompetitorPage'
import MarketplacePage from './pages/MarketplacePage'
import ListProductPage from './pages/ListProductPage'
import ProfilePage from './pages/ProfilePage'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/productpedia/:productSlug?" element={<ProductPediaPage />} />
        <Route path="/country/:countryId" element={<CountryPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/competitor/competitor-alibaba" element={<CompetitorPage />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/supplier-discovery" element={<SupplierDiscovery />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/marketplace/list" element={<ListProductPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </AuthProvider>
  )
}

export default App
