import './App.css';
import RotorComponent from './components/RotorComponent';


function App() {
  return (
    <div className="container-fluid text-center">
      <h1>Enigma</h1>
      <div className="row">
        <div className="col">
          <RotorComponent />
        </div>
        <div className="col">
          <RotorComponent />
        </div>
        <div className="col">
          <RotorComponent />
        </div>
      </div>
    </div>

  );
}

export default App;
