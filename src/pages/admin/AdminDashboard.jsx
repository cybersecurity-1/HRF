import React, { useState } from 'react';
import AdminLogin from './AdminLogin';
import AdminQuotes from './AdminQuotes';

const AdminDashboard = () => {
  const [token, setToken] = useState(null);

  return (
    <div>
      {!token ? (
        <AdminLogin onLogin={setToken} />
      ) : (
        <AdminQuotes token={token} />
      )}
    </div>
  );
};

export default AdminDashboard;
