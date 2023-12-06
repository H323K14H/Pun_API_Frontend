import Pun from "../components/Pun";
import { useEffect, useState } from "react";
import PunButton from "../components/PunButton";


const PunContainer = () => {

    const [pun, setPun] = useState(null);

    // GET MAPPING
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
            {pun ? <Pun pun={pun} /> : <p>😩Life changing pun coming up😩...</p>}
            <br />
            <br />
            <PunButton onButtonClick={getRandomPun} />
        </>
    )
}

export default PunContainer;