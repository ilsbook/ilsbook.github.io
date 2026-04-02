import React from 'react';
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import Listenings from './pages/Listenings';
import Unit from './pages/Unit';
import AboutBook from './pages/AboutBook';
import AboutAuthor from './pages/AboutAuthor';
import { BOOK_TITLE } from './constants/bookMeta';
import './App.css';

function App() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="app">
      <header className="header" role="banner">
        <nav className="nav" role="navigation" aria-label="Main navigation">
          <Link to="/" className="logo-link" aria-label="Home">
            <span className="flag-emoji" role="img" aria-label="British flag">🇬🇧</span>
            <h1 className="site-title">{BOOK_TITLE}</h1>
          </Link>
          <ul className="nav-links">
            <li>
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
                aria-current={location.pathname === '/' ? 'page' : undefined}
              >
                Listenings
              </Link>
            </li>
            <li>
              <Link
                to="/about/book"
                className={path === '/about/book' ? 'active' : ''}
                aria-current={path === '/about/book' ? 'page' : undefined}
              >
                About the Book
              </Link>
            </li>
            <li>
              <Link
                to="/about/author"
                className={path === '/about/author' ? 'active' : ''}
                aria-current={path === '/about/author' ? 'page' : undefined}
              >
                About the Author
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="main-content" role="main">
        <Routes>
          <Route path="/" element={<Listenings />} />
          <Route path="/unit/:unitId" element={<Unit />} />
          <Route path="/about" element={<Navigate to="/about/book" replace />} />
          <Route path="/about/book" element={<AboutBook />} />
          <Route path="/about/author" element={<AboutAuthor />} />
        </Routes>
      </main>

      <footer className="footer" role="contentinfo">
        <p>&copy; {new Date().getFullYear()} {BOOK_TITLE}</p>
      </footer>
    </div>
  );
}

export default App;
