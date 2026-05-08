import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import GuestBlock from './components/GuestBlock';
import LocationBlock from './components/LocationBlock';
import TimingBlock from './components/TimingBlock';
import DressCodeBlock from './components/DressCodeBlock';
import RsvpBlock from './components/RsvpBlock';
import FadeInSection from './components/FadeInSection';
import EnvelopeCover from './components/EnvelopeCover'; // Наш новый компонент!
import { useState } from 'react';

function App() {
  const [showEnvelope, setShowEnvelope] = useState(true);

  // Коллбек, который сработает, когда анимация открытия закончится
  const dismissEnvelope = () => {
    setShowEnvelope(false);
  };
  return (
    <div className="wedding-app">
      {showEnvelope && <EnvelopeCover onComplete={dismissEnvelope} />}
      <Header />
      <FadeInSection>
        <GuestBlock />
      </FadeInSection>
      <FadeInSection>
        <LocationBlock />
      </FadeInSection>
      <FadeInSection>
        <TimingBlock />
      </FadeInSection>
      <FadeInSection>
        <DressCodeBlock />
      </FadeInSection>
      <FadeInSection>
        <RsvpBlock />
      </FadeInSection>
    </div>
  );
}

export default App;
