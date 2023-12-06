import Pun from "../components/Pun";
import { useEffect, useState } from "react";


const PunContainer = () => {
   
  const[pun, setPun] = useState({});
    
  const getRandomPun = async () => {
    const response = await fetch("https://www.punapi.rest/api/pun");
    const data = await response.json();
    setPun(data);

  }

  useEffect(() => {
    getRandomPun();
  }, [])





  return (
    <>
      <h1>Random Pun</h1>
      
      <Pun pun = {pun} />

    </>
  )
}

export default PunContainer;