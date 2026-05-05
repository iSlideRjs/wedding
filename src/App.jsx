import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import GuestBlock from './components/GuestBlock';
import LocationBlock from './components/LocationBlock';

function App() {
  return (
    <div className="wedding-app">
      <Header />
      <GuestBlock />
      <LocationBlock />
    </div>
  );
}

export default App;
