import React from 'react'
import { useState } from "react";
import Nav from '../../components/Nav/Nav';

function Home() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Home</h1>
      <Nav />
      <p>Welcome to our restaurant site</p>

      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
    </div>
  );
}

export default Home;