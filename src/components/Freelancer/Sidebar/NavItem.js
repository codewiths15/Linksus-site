// NavItem.js
import React from 'react';

function NavItem({ image, text }) {
  return (
    <li>
      <img src={image} alt={text} width={20} />
      <p>{text}</p>
    </li>
  );
}

export default NavItem;
