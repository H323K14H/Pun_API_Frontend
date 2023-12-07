import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Pun from './components/Pun';
import PunForm from './components/PunForm';
import PunContainer from './containers/PunContainer';
import { useState } from 'react';
import FanList from './components/FanList';
import PunButton from './components/PunButton';
import Welcome from './components/Welcome';

function App({getRandomPun}) {

  const [pun, setPun] = useState([]);
  const [punFans, setPunFans] = useState(
    [
      {
        name: "Robert",
        email: "Rob.puns@aol.com",
        comment: "I was on the edge.... But once I pressed that button, my life changed forever",
        id: 0
      },
      {
        name: "Ashley",
        email: "Ash.404@yahoo.com",
        comment: "The kids and I love generating a pun to get us started for the day!",
        id: 0
      }
    ]
  );

  const handleNewFanSubmission = (newFan) => {
    const updatedFans = [...punFans, newFan];
    setPunFans(updatedFans);
  }

  

    

  const punRoutes = createBrowserRouter(
    [
      {
        path: "/",
        element: <>
                <Home />
                
                </>,
        children: [
          {
            path: "/",
            element: <Welcome />
            

          },
          {
            path: "/",
            element: <PunContainer setPun={setPun} />,
            children: [
              {
                path: "/random-pun",
                element: <>
                  <Pun  pun={pun} onButtonClick={getRandomPun} />
                  {/* <PunButton   /> */}
                </>
              },
              {
                path: "/comment-section",
                element: <>
                  <PunForm onNewFanSubmission={handleNewFanSubmission} />
                  <FanList punFans={punFans} />
                </>
              }
            ]
          }
        ]
      }
    ]
  );

  return (
    <div className="App">
      <RouterProvider router={punRoutes} />
    </div>
  );
}

export default App;