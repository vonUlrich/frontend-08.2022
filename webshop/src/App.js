import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Cart from './pages/Cart';
import AdminHome from './pages/AdminHome';
import AddProduct from './pages/AddProduct';
import MaintainProduct from './pages/MaintainProduct';
import MaintainCategories from './pages/MaintainCategories';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/avaleht">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin">Admin vaatesse</Nav.Link>
            <Nav.Link as={Link} to="/ostukorv">Ostukorv</Nav.Link>
            <Nav.Link as={Link} to="/admin/lisa-toode">Lisa toode</Nav.Link>
            <Nav.Link as={Link} to="/admin/halda-tooteid">Halda tooteid</Nav.Link>
            <Nav.Link as={Link} to="/admin/halda-kategooriaid">Halda kategooriaid</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



      <Routes>
        <Route path="avaleht" element={<HomePage />} />
        <Route path="ostukorv" element={<Cart />} />
        <Route path="admin" element={<AdminHome />} />
        <Route path="admin/lisa-toode" element={<AddProduct />} />
        <Route path="admin/halda-tooteid" element={<MaintainProduct />} />
        <Route path="admin/halda-kategooriaid" element={<MaintainCategories />} />
      </Routes>

    </div>
  );
}

export default App;
