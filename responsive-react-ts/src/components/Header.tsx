import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="light" expand="md" className="shadow-sm">
      <Container>
        {/* Logo y nombre */}
        <Navbar.Brand href="#inicio" className="d-flex align-items-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/590/590836.png" // Logo de taza de café
            alt="Logo Café Aurora"
            width="40"
            height="40"
            className="me-2"
          />
          <span className="fw-bold">Café Aurora</span>
        </Navbar.Brand>

        {/* Botón hamburguesa en móvil */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#articulos">Productos</Nav.Link>
            <Nav.Link href="#servicios">Servicios</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


