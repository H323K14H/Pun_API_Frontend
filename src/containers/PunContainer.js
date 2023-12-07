import Pun from "../components/Pun";
import { useEffect, useState } from "react";
import PunButton from "../components/PunButton";
import PunForm from "../components/PunForm";


const PunContainer = () => {

    const [pun, setPun] = useState(null);
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

    // GET MAPPING
    const getRandomPun = async () => {
        const response = await fetch("https://www.punapi.rest/api/pun");
        const data = await response.json();
        setPun(data);
    }

    useEffect(() => {
        getRandomPun();
    }, [])

    const handleNewFan = (newFan) => {
        const updatedFans = [...punFans, newFan];
        setPunFans(updatedFans);
    }

    return (
        <body>
            <h1>Random Pun</h1>
            <PunForm onNewFanSubmission={handleNewFan}/>
            {pun ? <Pun pun={pun} /> : <p>😩Life changing pun coming up😩...</p>}
            <br />
            <br />
            <PunButton onButtonClick={getRandomPun} />
        </body>
    )
}

export default PunContainer;