// Third party imports
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// App Imports
import "./AppNavbar.css";
import UserProfileNavbar from './UserProfileNavbar';

function AppNavbar() {
  return (
    <Navbar sticky='top' collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/home">
          <div className='logoText'>ElderCare</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <UserProfileNavbar/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;