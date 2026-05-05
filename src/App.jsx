import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import GuestBlock from './components/GuestBlock';
import LocationBlock from './components/LocationBlock';
import TimingBlock from './components/TimingBlock';
import DressCodeBlock from './components/DressCodeBlock';

function App() {
  return (
    <div className="wedding-app">
      <Header />
      <GuestBlock />
      <LocationBlock />
      <TimingBlock />
      <DressCodeBlock />
    </div>
  );
}

export default App;
