import './App.css';
import { Routes, Route } from 'react-router-dom';
import PrivateRoute from './auth/PrivateRoute';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register';
import ProjectDetailsPage from './pages/ProjectDetailsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={
        <PrivateRoute>
          <Dashboard />
        </PrivateRoute>
      } />
      <Route path="/projects/:projectId" element={
        <PrivateRoute>
        <ProjectDetailsPage />
        </PrivateRoute>} />

    </Routes>
  );
}

export default App;
