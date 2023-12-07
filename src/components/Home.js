import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
          <ul>
              <Link to="/">Home</Link>
              {/* <Link to="/random-pun">Random Puns</Link>  */}
              <Link to="/comment-section">Post comment:</Link> 
          </ul>
      </nav>
      <Outlet />
    </>
  )
}

export default Home;