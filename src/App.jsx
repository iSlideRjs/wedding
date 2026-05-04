import 'bootstrap/dist/css/bootstrap.min.css';
import WeddingInvitation from './components/WeddingInvitation';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div>
      <WeddingInvitation />
      <Container className="text-center">
        <p>Здесь скоро будет остальной контент...</p>
      </Container>
    </div>
  );
}

export default App;
