import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import RiwayatIdentifier from '../riwayat-identifier.jsx';
import LearnPage from './learn.jsx';
import ExplorePage from './explore.jsx';

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
    if (p.startsWith('learn')) return 'learn';
    if (p.startsWith('explore')) return 'explore';
    return 'home';
  };
  const parseLearnTab = (p) => {
    const match = p.match(/^learn\/(.+)/);
    return match ? match[1] : null;
  };

  const [page, setPage] = useState(parsePath(getPath()));
  const [learnTab, setLearnTab] = useState(parseLearnTab(getPath()));
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
      setLearnTab(parseLearnTab(p));
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
  const goLearn = (tab) => navigate(tab ? 'learn/' + tab : 'learn');
  const goExplore = () => navigate('explore');

  if (page === 'learn') {
    return <LearnPage onHome={goHome} onLearn={goLearn} onExplore={goExplore} darkMode={darkMode} toggleDark={toggleDark} initialTab={learnTab} />;
  }
  if (page === 'explore') {
    return <ExplorePage onHome={goHome} onLearn={goLearn} onExplore={goExplore} darkMode={darkMode} toggleDark={toggleDark} />;
  }
  return <RiwayatIdentifier onHome={goHome} onLearn={goLearn} onExplore={goExplore} darkMode={darkMode} toggleDark={toggleDark} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
