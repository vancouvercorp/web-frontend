import React, { useState, useEffect } from 'react';

const ResponsiveNav = ({ items = [], onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleItemClick = (index, path) => {
    setActiveIndex(index);
    setIsOpen(false);
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <nav className="responsive-nav" role="navigation" aria-label="Main navigation">
      <button
        className="nav-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="nav-menu"
      >
        <span className="hamburger-icon" />
      </button>

      <ul id="nav-menu" className={`nav-list ${isOpen ? 'nav-list--open' : ''}`}>
        {items.map((item, index) => (
          <li key={index} className="nav-item">
            <a
              href={item.path}
              className={`nav-link ${index === activeIndex ? 'nav-link--active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleItemClick(index, item.path);
              }}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ResponsiveNav;
