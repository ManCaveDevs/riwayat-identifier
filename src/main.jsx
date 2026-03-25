import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import RiwayatIdentifier from '../riwayat-identifier.jsx';
import DocsPage from './docs.jsx';

function App() {
  const parseHash = () => {
    const h = window.location.hash;
    if (h.startsWith('#docs')) return { page: 'docs', tab: h.split('/')[1] || null };
    return { page: 'home', tab: null };
  };

  const [page, setPage] = useState(() => parseHash().page);
  const [docsTab, setDocsTab] = useState(() => parseHash().tab);
  const [darkMode, setDarkMode] = useState(() => {
    if (localStorage.getItem("riwayat-dark") !== null) {
      return localStorage.getItem("riwayat-dark") === "true";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const onHash = () => {
      const { page, tab } = parseHash();
      setPage(page);
      setDocsTab(tab);
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
