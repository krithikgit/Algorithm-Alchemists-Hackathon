import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const NavBar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = () => { logout(); navigate('/login'); };

  return (
    <nav className="bg-primary text-white px-6 py-3 flex justify-between items-center shadow">
      <h1 className="text-lg font-semibold">Maverick Training Dashboard</h1>
      {user && (
        <div className="flex items-center gap-4">
          {user.role === 'FRESHER' && <Link to="/dashboard">My Dashboard</Link>}
          {user.role === 'ADMIN' && (
            <>
              <Link to="/admin">Admin Console</Link>
              <Link to="/admin/reports">Reports</Link>
            </>
          )}
          <button onClick={handleLogout} className="border px-2 py-1 rounded">Logout</button>
        </div>
      )}
    </nav>
  );
};
export default NavBar;
