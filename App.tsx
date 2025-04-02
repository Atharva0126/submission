import React from 'react';
import { useSelector } from 'react-redux';
import Login from './components/Login';
import StudentTable from './components/StudentTable';

const App: React.FC = () => {
  const user = useSelector((state: any) => state.auth.user);

  return (
    <div className="container mx-auto p-4">
      {user ? <StudentTable /> : <Login />}
    </div>
  );
};

export default App;