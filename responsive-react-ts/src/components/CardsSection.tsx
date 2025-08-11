import { Container, Card, Button } from "react-bootstrap";

const cards = [
  {
    title: "Espresso Intenso",
    text: "Tueste medio–oscuro, molido fino. Ideal para máquinas espresso.",
    img: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Latte Suave",
    text: "Notas de vainilla y cacao. Perfecto para tus mañanas.",
    img: "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Capuchino Cremoso",
    text: "Equilibrio entre café y espuma de leche. Irresistible.",
    img: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Café Orgánico",
    text: "De fincas sostenibles, sin pesticidas. Comercio justo.",
    img: "https://images.unsplash.com/photo-1509043759401-136742328bb3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Cold Brew 12h",
    text: "Infusionado en frío, refrescante y baja acidez.",
    img: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Kit Barista",
    text: "Prensa francesa, molinillo y 500g de café premium.",
    img: "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function CardsSection() {
  return (
    <section className="py-4" id="articulos">
      <Container>
        <h2 className="h3 mb-3">Nuestros Productos</h2>

        {/* 1 col ≤600px, 2 col 601–1024px, 3 col >1024px */}
        <div className="row g-3">
          {cards.map((c, i) => (
            <div key={i} className="col-12 col-md-6 col-desktop-4">
              <Card className="h-100 shadow-sm">
                {c.img && (
                  <Card.Img
                    variant="top"
                    src={c.img}
                    alt={c.title}
                    style={{ objectFit: "cover", height: 160 }}
                  />
                )}
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{c.title}</Card.Title>
                  <Card.Text className="mb-3">{c.text}</Card.Text>
                  <div className="mt-auto">
                    <Button size="sm">Ver más</Button>
                  </div>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
