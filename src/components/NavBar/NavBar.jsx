import { Link, NavLink } from 'react-router-dom'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Cartwidget } from '../Cartwidget/Cartwidget'

// import 
const NavBar = ({ componente }) => {
  // console.log(children)
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <NavLink className={({isActive})=> isActive ? 'btn btn-primary': 'btn btn-outline-primary' } to="/">React-Bootstrap</NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
              <NavLink className='btn btn-outline-primary' to="/category/gorras">Gorras</NavLink>
              <NavLink className='btn btn-outline-primary' to="/category/remeras">Remeras</NavLink>
              {/* <NavLink to="">Remeras</NavLink> */}
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                  Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                  Separated link
                  </NavDropdown.Item>
              </NavDropdown> */}
              </Nav>
              <Nav>
              {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
              
                <NavLink className='btn btn-outline-primary' to='/cart'>
                  <Cartwidget />
                </NavLink>
              </Nav>
          </Navbar.Collapse>
          </Container>
          
        
      </Navbar>
      {/* {componente({})} */}

      
    </>
  )
}

export default NavBar