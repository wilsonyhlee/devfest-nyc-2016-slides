import React from 'react';
import {
    Image,
    } from "spectacle";

const SeatMapComparison = (props) => (
    <div>
        <Image src={props.todayTix} style={{width: "32%", marginRight:"10px"}} />
        <Image src={props.telecharge} style={{width: "32%", marginRight:"10px"}} />
        <Image src={props.broadwaycom} style={{width: "32%"}} />
    </div>
);

export default SeatMapComparison;

