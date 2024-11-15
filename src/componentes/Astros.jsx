//se jala info de:
import { useState, useEffect } from "react";
import "../componentes/Astros.css";
import {CircularProgress} from '@mui/material';


//lo que queremos que haga la tarjetita con info:
function AstroCard({name, craft}) {
    return(
        <div className="astro-card">
            <p className="astro-name">{name}</p>
            <p className="astro-craft">{craft}</p>
        </div>
    );
}

//lo que queremos jalar de la api:
function Astros(){
const API_URL = "http://api.open-notify.org/astros.json";
const [astros, setAstros] = useState(null);

useEffect(()=>{
    const fetchData = async () => {
        const data = await fetch(API_URL);
        const res = await data.json();
        //se pone.people, porque solo queremos los datos dentro de people, no lo demás
        setAstros(res.people);
        console.log(res.people);
    }
    fetchData().catch((err) => console.error(err));
}, []);

return (
    <div className="astros-container">
        {!astros ? (
            <CircularProgress />
        ) : (
            astros.map((astro, idx) => (
                <AstroCard key={idx} {...astro} />
            ))
        )}
    </div>
);
}
export default Astros;