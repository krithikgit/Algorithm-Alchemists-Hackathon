import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './pages/Login';
import FresherDashboard from './pages/FresherDashboard';
import AdminConsole from './pages/AdminConsole';
import ReportBuilder from './pages/ReportBuilder';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/login" element={<Login />} />

      {/* Fresher Routes */}
      <Route
        path="/dashboard"
        element={<ProtectedRoute roles={['FRESHER']}><FresherDashboard /></ProtectedRoute>}
      />

      {/* Admin Routes */}
      <Route
        path="/admin"
        element={<ProtectedRoute roles={['ADMIN']}><AdminConsole /></ProtectedRoute>}
      />
      <Route
        path="/admin/reports"
        element={<ProtectedRoute roles={['ADMIN']}><ReportBuilder /></ProtectedRoute>}
      />

      {/* fallback */}
      <Route path="*" element={<Login />} />
    </Routes>
  </>
);

export default App;
