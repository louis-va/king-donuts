import React from 'react'
import { useState, useEffect } from "react";
import Nav from '../../components/Nav/Nav';

function Menu() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    function getMenuItems() {
      fetch('/api/menu-items/', {method: 'GET'})
        .then(response => response.json())
        .then(data => {
          setMenuItems(data.data.menuItems)
        })
        .catch((error) => {console.error(error)})
    }

    getMenuItems()
  })

  return (
    <div className="container">
      <h1>Menu</h1>
      <Nav />
      <p>Browse our menu here</p>
      <p>
        Menu: 
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </p>
    </div>
  );
}

export default Menu;