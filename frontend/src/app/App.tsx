import ErrorModal from '../components/shared/errorModal/ErrorModal';
import Routes from '../routes/Routes';
import './app.scss';

function App() {
  return (
    <div className="App">
      <ErrorModal />
      <Routes />
    </div>
  );
}

export default App;
