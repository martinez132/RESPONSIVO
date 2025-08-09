import { Container } from 'react-bootstrap';

export default function Footer() {
  return (
    <footer className="bg-light border-top mt-4 py-4">
      <Container className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-3">
        <span className="text-muted">© {new Date().getFullYear()} Mi Sitio</span>
        <div className="d-flex gap-3 fs-4">
          <a href="https://facebook.com" aria-label="Facebook" className="text-decoration-none">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://twitter.com" aria-label="X/Twitter" className="text-decoration-none">
            <i className="bi bi-twitter-x"></i>
          </a>
          <a href="https://instagram.com" aria-label="Instagram" className="text-decoration-none">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </Container>
    </footer>
  );
}
