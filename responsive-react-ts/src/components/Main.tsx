import { Container } from 'react-bootstrap';

export default function Main() {
  return (
    <main className="py-4" id="inicio">
      <Container>
        <h1 className="display-5 fw-bold mb-3">Diseño Responsivo con Bootstrap</h1>
        <p className="lead">
          Esta es una demo en React + TypeScript que muestra un encabezado, un contenido principal,
          una sección de tarjetas y un pie de página, con comportamiento responsivo controlado por
          Bootstrap y media queries personalizados.
        </p>
      </Container>
    </main>
  );
}
