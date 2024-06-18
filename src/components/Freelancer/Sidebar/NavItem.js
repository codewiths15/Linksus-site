import React from 'react';
import { Link } from 'react-router-dom';

function NavItem({ image, text, path, isSelected, onClick }) {
  return (
    <li>
      <Link
        to={path}
        className={`nav-link ${isSelected ? 'selected' : ''}`}
        onClick={onClick}
      >
        <img src={image} alt={text} width={20} />
        <p>{text}</p>
      </Link>
    </li>
  );
}

export default NavItem;
