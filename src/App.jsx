import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import GuestBlock from './components/GuestBlock';
import LocationBlock from './components/LocationBlock';
import TimingBlock from './components/TimingBlock';
import DressCodeBlock from './components/DressCodeBlock';
import RsvpBlock from './components/RsvpBlock';
import FadeInSection from './components/FadeInSection';

function App() {
  return (
    <div className="wedding-app">
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
