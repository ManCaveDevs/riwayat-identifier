import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import RiwayatIdentifier from '../riwayat-identifier.jsx';
import DocsPage from './docs.jsx';

function App() {
  const [page, setPage] = useState(window.location.hash === '#docs' ? 'docs' : 'home');

  useEffect(() => {
    const onHash = () => setPage(window.location.hash === '#docs' ? 'docs' : 'home');
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);

  if (page === 'docs') {
    return <DocsPage onBack={() => { window.location.hash = ''; }} />;
  }
  return <RiwayatIdentifier onDocs={() => { window.location.hash = 'docs'; }} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
