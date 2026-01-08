import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import WordList from './pages/WordList';
import WordTest from './pages/WordTest';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/word-list" element={<WordList />} />
          <Route path="/word-test" element={<WordTest />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
zxc
