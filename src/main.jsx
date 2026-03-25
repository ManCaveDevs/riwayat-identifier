import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import RiwayatIdentifier from '../riwayat-identifier.jsx';
import DocsPage from './docs.jsx';

function App() {
  const [page, setPage] = useState(window.location.hash === '#docs' ? 'docs' : 'home');
  const [darkMode, setDarkMode] = useState(() => {
    if (localStorage.getItem("riwayat-dark") !== null) {
      return localStorage.getItem("riwayat-dark") === "true";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const onHash = () => setPage(window.location.hash === '#docs' ? 'docs' : 'home');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const toggleDark = () => {
    setDarkMode(prev => {
      localStorage.setItem("riwayat-dark", String(!prev));
      return !prev;
    });
  };

  if (page === 'docs') {
    return <DocsPage onBack={() => { window.location.hash = ''; }} darkMode={darkMode} toggleDark={toggleDark} />;
  }
  return <RiwayatIdentifier onDocs={() => { window.location.hash = 'docs'; }} darkMode={darkMode} toggleDark={toggleDark} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
