import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/auth.context';
import Menu from './components/layout/menu';
import Footer from './components/layout/footer';
import Home from './components/pages/home';
import Login from './components/auth/login';
import Register from './components/auth/register';
import Dashboard from './components/layout/Dashboard';
import Projects from './components/projects/projects';
import ProjectDetails from './components/projects/project.details';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Menu />
          <div className="flex flex-1">
            <main className="flex-1 p-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:projectId" element={<ProjectDetails />} />
              </Routes>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};
export default App;
