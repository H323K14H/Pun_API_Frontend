import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Pun from './components/Pun';
import PunForm from './components/PunForm';
import PunContainer from './containers/PunContainer';
import { useEffect, useState } from 'react';
import FanList from './components/FanList';
import Welcome from './components/Welcome';
import Bin from './components/Bin';

function App() {

  const [pun, setPun] = useState([]);
  const [punFans, setPunFans] = useState(
    [
      {
        name: "Bill Gates",
        email: "bill.gates@gatesfoundation.org",
        comment: "This is the best app I have ever seen!!!, whoever these developers are, they are absolute tech wizards!!!",
        id: 1
      },
      {
        name: "Mark Zuckerberg",
        email: "mark.zuckerberg@meta.com",
        comment: "This is better than anything I've ever done!",
        id: 2
      },
      {
        name: "Ashley",
        email: "Ash.404@yahoo.com",
        comment: "The kids and I love generating a pun to get us started for the day!",
        id: 3
      },
      {
        name: "Robert",
        email: "Rob.puns@aol.com",
        comment: "I was on the edge.... But once I pressed that button, my life changed forever!!!",
        id: 4
      },
    ]
  );


  // GET MAPPING
  const getRandomPun = async () => {
    const response = await fetch("https://www.punapi.rest/api/pun");
    const data = await response.json();
    setPun(data);
  };

  useEffect(() => {
    getRandomPun();
  }, []);

  const handleNewFanSubmission = (newFan) => {
    const updatedFans = [...punFans, newFan];
    setPunFans(updatedFans);
  };

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
                  <Pun pun={pun} onButtonClick={getRandomPun} />
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
      },
      {
        
          path: "/get-in-the-bin",
          element: <Bin />
        
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