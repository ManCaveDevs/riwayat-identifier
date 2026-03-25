import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import RiwayatIdentifier from '../riwayat-identifier.jsx';
import DocsPage from './docs.jsx';

function App() {
  const parseHash = (hash) => {
    if (hash.startsWith('#docs')) return 'docs';
    return 'home';
  };
  const parseDocsTab = (hash) => {
    const match = hash.match(/^#docs\/(.+)/);
    return match ? match[1] : null;
  };
  const [page, setPage] = useState(parseHash(window.location.hash));
  const [docsTab, setDocsTab] = useState(parseDocsTab(window.location.hash));
  const [darkMode, setDarkMode] = useState(() => {
    if (localStorage.getItem("riwayat-dark") !== null) {
      return localStorage.getItem("riwayat-dark") === "true";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const onHash = () => {
      setPage(parseHash(window.location.hash));
      setDocsTab(parseDocsTab(window.location.hash));
    };
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  const toggleDark = () => {
    setDarkMode(prev => {
      localStorage.setItem("riwayat-dark", String(!prev));
      return !prev;
    });
  };

  const goHome = () => { window.location.hash = ''; };
  const goDocs = () => { window.location.hash = 'docs'; };

  if (page === 'docs') {
    return <DocsPage onHome={goHome} onDocs={goDocs} darkMode={darkMode} toggleDark={toggleDark} initialTab={docsTab} />;
  }
  return <RiwayatIdentifier onHome={goHome} onDocs={goDocs} darkMode={darkMode} toggleDark={toggleDark} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
