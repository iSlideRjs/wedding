import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import GuestBlock from './components/GuestBlock';

function App() {
  return (
    <div className="wedding-app">
      <Header />
      {/* Сюда будем добавлять следующие блоки */}
      <GuestBlock />
    </div>
  );
}

export default App;
