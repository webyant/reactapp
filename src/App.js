import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import BlogPost from './pages/BlogPost';


const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/blogs" element={<BlogPost />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;