import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import GuestBlock from './components/GuestBlock';
import LocationBlock from './components/LocationBlock';
import TimingBlock from './components/TimingBlock';
import DressCodeBlock from './components/DressCodeBlock';
import RsvpBlock from './components/RsvpBlock';
import FadeInSection from './components/FadeInSection';
import EnvelopeCover from './components/EnvelopeCover';
import { useState } from 'react';

function App() {
  const [showEnvelope, setShowEnvelope] = useState(true);
  const [isEnvelopeOpening, setIsEnvelopeOpening] = useState(false);

  const handleOpenStart = () => {
    setIsEnvelopeOpening(true);
  };

  const dismissEnvelope = () => {
    setShowEnvelope(false);
  };
  return (
    <div className="wedding-app">
      {showEnvelope && (
        <EnvelopeCover
          onOpenStart={handleOpenStart}
          onComplete={dismissEnvelope}
        />
      )}
      <div
        className={`site-content ${!isEnvelopeOpening ? 'hidden-content' : ''}`}
      >
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
    </div>
  );
}

export default App;
