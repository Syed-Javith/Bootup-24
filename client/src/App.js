import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import FoodPage from './pages/FoodPage';
import FoodItem from './pages/FoodItem';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<AuthPage />} />
        <Route path='/foods' element={<FoodPage />} />
        <Route path='/foods/:id' element={<FoodItem />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;