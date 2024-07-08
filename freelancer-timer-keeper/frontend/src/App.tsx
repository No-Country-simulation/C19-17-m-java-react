import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './componets/layout/menu';
import Footer from './componets/layout/footer';
import Home from './componets/pages/home';
import Login from './componets/auth/login';
import Register from './componets/auth/registro';
import Dashboard from './componets/layout/Dashboard';
const App: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Menu />
        <div className="flex flex-1">
         
          <main className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/Dashboard" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;