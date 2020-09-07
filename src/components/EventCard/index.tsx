import React from "react";


import "./styles.css"


function EventCard(props:any) {
    return (

        <div className="Card">
            <h3>{props.title}</h3>
            <h4>Venha saber como ser protagonista da sua própia história.</h4>
            <h5>Onde e Quando?</h5>
            <h6>Evento online, dia {props.date}</h6>
        </div>
    )
}

export default EventCard
