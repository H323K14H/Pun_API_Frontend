import React from 'react'
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
          <ul>
              <li><Link to="/random-pun">Random Puns </Link> </li>
          </ul>
      </nav>
      <Outlet />

    </>
  )
}

export default Home;