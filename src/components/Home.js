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

      <div className='links'>
          <p>
            Welcome to our pun application. Have some 🎸pun🎸 with us!!!!
          </p>
          <p>
            If you don't like puns please direct to http://localhost:3000/get-in-the-bin
          </p>
          <p>
            Brought to you by yours truly 
          </p>
          <p>
            H323 & N4T
          </p>

      </div>

      <Outlet />
    </>
  )
}

export default Home;