import { Button, Container } from 'react-bootstrap';
import place from '../assets/place.jpg';

function LocationBlock() {
  const mapUrl = 'https://yandex.ru/maps/-/CPcYyVIW';

  return (
    <section className="section-location">
      <Container>
        <div className="location-design-title">
          <span className="text-place">МЕСТО</span>
          <span className="text-conducting">проведения</span>
          <div className="venue-details">
            <h3 className="venue-name">Cottage No. 3</h3>
            <p className="venue-address">
              г. Курcк, ул.Сумcкая, д. 112 <br />
              (Mоквa 277a)
            </p>
          </div>
          <div className="location-image-wrapper">
            <img src={place} alt="Cottage" className="location-sketch" />
          </div>
          <div className="map-wrapper">
            <Button
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-map"
            >
              ОТКРЫТЬ КАРТУ
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default LocationBlock;
