// src/components/CardsSection.tsx
import { Container, Card } from 'react-bootstrap';

const cards = [
  { title: 'Artículo 1', text: 'Resumen breve del contenido.' },
  { title: 'Producto 2', text: 'Descripción rápida del producto.' },
  { title: 'Servicio 3', text: 'Beneficios y alcance del servicio.' },
  { title: 'Artículo 4', text: 'Resumen breve del contenido.' },
  { title: 'Producto 5', text: 'Descripción rápida del producto.' },
  { title: 'Servicio 6', text: 'Beneficios y alcance del servicio.' },
];

export default function CardsSection() {
  return (
    <section className="py-4" id="articulos">
      <Container>
        <h2 className="h3 mb-3">Tarjetas</h2>

        <div className="row g-3">
          {cards.map((c, i) => (
            <div key={i} className="col-12 col-md-6 col-desktop-4">
              <Card className="h-100 shadow-sm">
                <Card.Body>
                  <Card.Title>{c.title}</Card.Title>
                  <Card.Text>{c.text}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
