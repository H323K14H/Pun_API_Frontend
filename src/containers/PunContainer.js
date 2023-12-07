import Pun from "../components/Pun";
import { useEffect, useState } from "react";
import PunButton from "../components/PunButton";
import PunForm from "../components/PunForm";
import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from "react-router-dom";
import Home from "../components/Home";
import FanList from "../components/FanList";


const PunContainer = ({ setPun }) => {

    const navigate = useNavigate();

    // GET MAPPING
    const getRandomPun = async () => {
        const response = await fetch("https://www.punapi.rest/api/pun");
        const data = await response.json();
        setPun(data);
        navigate("/random-pun");
    }

    useEffect(() => {
        getRandomPun();
    }, [])

    return (
        <body>
            <h1>Have som Pun with us!!!
                <p className="pun-intended">(pun intended)</p>
            </h1>
            {/* <PunButton onButtonClick={getRandomPun} /> */}
          
        
            <Outlet />
        </body>

    )
}

export default PunContainer;