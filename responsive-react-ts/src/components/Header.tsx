import logo from "../assets/logo.webp";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="light" expand="md" className="shadow-sm sticky-top">
      <Container>
        <Navbar.Brand href="#">
          <img
            src={logo} // aquí usamos la imagen importada
            alt="Logo"
            className="me-2 rounded"
            width="32"
            height="32"
          />
          Mi Sitio
        </Navbar.Brand>

        {/* Hamburguesa por debajo de md; ≤600 queda cubierto */}
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#articulos">Artículos</Nav.Link>
            <Nav.Link href="#servicios">Servicios</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

