import NavBar from "./components/Navbar.jsx"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from "react-bootstrap"
import { BrowserRouter, Routes, Route , useNavigate } from 'react-router-dom'
import Cancel from "./pages/Cancel.jsx"
import Success from "./pages/Success.jsx"
import Store from "./pages/Store.jsx"
import ProductPage from "./pages/ProductPage.jsx"
import {CartProvider} from "./CartContext.jsx"
import OrderDetailsPage from "./pages/OrderDetailsPage.jsx"

function App() {
  
  return (
      <CartProvider>
        <Container>
          <NavBar />
          <Routes>
            <Route path='/' element={<Store />} />
            <Route path='/product/:productId' element={<ProductPage />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
            <Route path="/order-details" element={<OrderDetailsPage />} />
          </Routes>
        </Container>
      </CartProvider>
  )
}

export default App
