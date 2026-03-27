import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import RiwayatIdentifier from '../riwayat-identifier.jsx';
import DocsPage from './docs.jsx';
import GuidePage from './guide.jsx';

const BASE = '/riwayat-identifier';

function getPath() {
  return window.location.pathname.replace(BASE, '').replace(/^\/+/, '') || '';
}

function navigate(path) {
  window.history.pushState(null, null, BASE + '/' + path);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

function App() {
  const parsePath = (p) => {
    if (p.startsWith('docs')) return 'docs';
    if (p.startsWith('guide')) return 'guide';
    return 'home';
  };
  const parseDocsTab = (p) => {
    const match = p.match(/^docs\/(.+)/);
    return match ? match[1] : null;
  };

  const [page, setPage] = useState(parsePath(getPath()));
  const [docsTab, setDocsTab] = useState(parseDocsTab(getPath()));
  const [darkMode, setDarkMode] = useState(() => {
    if (localStorage.getItem("riwayat-dark") !== null) {
      return localStorage.getItem("riwayat-dark") === "true";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const onPop = () => {
      const p = getPath();
      setPage(parsePath(p));
      setDocsTab(parseDocsTab(p));
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  const toggleDark = () => {
    setDarkMode(prev => {
      localStorage.setItem("riwayat-dark", String(!prev));
      return !prev;
    });
  };

  const goHome = () => navigate('');
  const goDocs = (tab) => navigate(tab ? 'docs/' + tab : 'docs');
  const goGuide = () => navigate('guide');

  if (page === 'docs') {
    return <DocsPage onHome={goHome} onDocs={goDocs} onGuide={goGuide} darkMode={darkMode} toggleDark={toggleDark} initialTab={docsTab} />;
  }
  if (page === 'guide') {
    return <GuidePage onHome={goHome} onDocs={goDocs} onGuide={goGuide} darkMode={darkMode} toggleDark={toggleDark} />;
  }
  return <RiwayatIdentifier onHome={goHome} onDocs={goDocs} onGuide={goGuide} darkMode={darkMode} toggleDark={toggleDark} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
