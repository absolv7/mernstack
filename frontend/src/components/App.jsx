import '../App.css';
import history from '../history';
import { Router } from 'react-router-dom';
import Routes from '../Routes/Routes';

const App = () => {
  return (
    <Router history={history}>
        <Routes></Routes>
    </Router>
  );
}

export default App;
