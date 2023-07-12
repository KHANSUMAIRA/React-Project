
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
// import { FaUserCircle } from 'react-icons/fa'
//  import { useContext } from 'react';
//  import { GlobalContext } from '../main';
// import  './Cart'
function Navigationbar() {
    //   Const (contextData) = useContext(GlobalContext)
    return (
        <Navbar bg="primary" >
            <Container>
                <Link className='navbar-brand' to="/">Ecommerce</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        
            
            <Link  className='ms-4 btn btn-danger  btn-outline-dark' to="/">Home</Link>
            <Link className='ms-4 btn btn-danger  btn-outline-dark' to="/products">Products</Link>
            <Link className='ms-4 btn btn-danger  btn-outline-dark' to="/login">Login</Link>
            <Link className='ms-4  btn btn-dark' to="PiShoppingCartFill/signup">SignUp</Link>


              </Nav>
              {/* <Cart/> */}
              

            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigationbar;