import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Container } from 'react-bootstrap';
import '../App.css';

function WeddingInvitation() {
  return (
    <Container
      className="p-0 d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <Card className="invitation-card shadow-lg" style={{ width: '22rem' }}>
        <Card.Body className="p-0">
          <div className="invitation-header text-center">
            <h1 className="display-6 d-logo">Д & А</h1>
            <p className="lead i-title">ВАШЕ ПРИГЛАШЕНИЕ</p>
          </div>
          <div className="invitation-details p-4">
            <div className="details-block mb-3">
              <p className="text-details">THE DATE / ДАТА СОБЫТИЯ</p>
              <h2 className="d-date">4 СБ | ИЮЛЬ 2026</h2>
              <p className="d-time">17:00</p>
            </div>
            <Button variant="accent" className="w-100 btn-confirm mt-3">
              ПОДТВЕРДИТЬ УЧАСТИЕ
            </Button>
          </div>

          <div className="invitation-footer text-center p-3">
            <p className="f-text">МЫ ЖДЕМ ВАС</p>
            <p className="f-logo">Д | А</p>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default WeddingInvitation;
