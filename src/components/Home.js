import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Home = () => {

  return (
    <>
      <nav>
        <div>
          <Link className="links" to="/">Home</Link>
        </div>
        <div>
          <Link className="links" to="/random-pun">Random Puns</Link>
        </div>
        <div>
          <Link className="links" to="/comment-section">Fan Page</Link>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default Home;