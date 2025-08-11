import { Container } from "react-bootstrap";

export default function Main() {
  return (
    <main className="py-4" id="inicio">
      <Container>
        <h1 className="display-5 fw-bold mb-3">Tienda de Café Artesanal</h1>
        <p className="lead">
          Descubre nuestra selección de cafés de especialidad, tostados en lotes
          pequeños y enviados frescos a tu puerta. Calidad, aroma y sabor en
          cada taza.
        </p>
      </Container>
    </main>
  );
}
