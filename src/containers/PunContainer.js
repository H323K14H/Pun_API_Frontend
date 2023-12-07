import { Outlet } from "react-router-dom";

const PunContainer = () => {

    return (
        <body>
            <h1>Have som Pun with us!!!
                <p className="pun-intended">(pun intended)</p>
            </h1>
            <Outlet />
        </body>
    );
}

export default PunContainer;