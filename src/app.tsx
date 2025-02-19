import { JSX } from 'react';
import './app.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserLogin from './components/UserLogin';
import Homepage from './components/home-page';

/**
 * The main application component.
 */
export function App(): JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<UserLogin />} />
      </Routes>
    </Router>
  );
}
