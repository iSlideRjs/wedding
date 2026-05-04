import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Button } from 'react-bootstrap';
import './App.css';

function InviteHeader(props) {
  return (
    <Card
      style={{
        width: '18rem',
        margin: '15px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      }}
    >
      <Card.Body>
        <Card.Title>Дмитрий & Александра</Card.Title>
        <Card.Subtitle className="mb-3 text-muted">
          Приглашение на свадьбу
        </Card.Subtitle>
        <Card.Text>
          Дорогой гость: <strong>{props.guestName}</strong>!<br />
          Мы будем очень рады видеть тебя на нашем празднике.
        </Card.Text>

        <Button variant="primary" className="w-100">
          Подтвердить присутствие
        </Button>
      </Card.Body>
    </Card>
  );
}

function App() {
  return (
    <Container className="p-4 d-flex flex-wrap justify-content-center">
      <InviteHeader guestName="" />
    </Container>
  );
}

export default App;
