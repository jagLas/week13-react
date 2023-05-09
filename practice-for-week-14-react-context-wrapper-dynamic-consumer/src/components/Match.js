import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

function Match () {

    const [match, setMatch] = useState(false);
    const {sign} = useContext(HoroscopeContext)

    return (
        <>
            <button onClick={() => setMatch(!match)}>Reveal Match</button>
            <div>
                {match ? sign.match: null}
            </div>
        </>
    )
}

export default Match;