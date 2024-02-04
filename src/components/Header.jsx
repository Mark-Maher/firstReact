import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link, NavLink} from "react-router-dom";
function Header() {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' className='backGround'>
        <Container className='py-1'>
          <Navbar.Brand
            as={Link}
            to={"/home"}
            className='text-white fs-2 fw-bold'
          >
            START FRAMEWORK
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ms-auto'>
              <NavLink
                as={NavLink}
                to={"/about"}
                className={"p-2 text-white fs-5 fw-bolder text-decoration-none"}
              >
                ABOUT
              </NavLink>
              <NavLink
                as={NavLink}
                to={"/portfolio"}
                className={"p-2 text-white fs-5 fw-bolder text-decoration-none"}
              >
                PORTFOLIO
              </NavLink>
              <NavLink
                as={NavLink}
                to={"/contact"}
                className={"p-2 text-white fs-5 fw-bolder text-decoration-none"}
              >
                CONTACT
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
