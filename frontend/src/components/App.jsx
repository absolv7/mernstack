import '../App.css';
import history from '../history';
import { Router } from 'react-router-dom';
import Routes from '../Routes/Routes';
import Navigation from './Navigation';
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Router history={history}>
        <Navigation></Navigation>
        <Routes></Routes>
    </Router>
  );
}

export default App;
