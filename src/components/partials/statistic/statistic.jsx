import React from "react";
import "./statistic.css";
import Topic from "../topic/topic";

export default function Statistic (){
    return(
        <div className="crimeTopography__statistic">
            <Topic number={1234} heading={"Killed Civilians"}/>
            <Topic number={1234} heading={"Killed Civilians"}/>
            <Topic number={1234} heading={"Killed Civilians"}/>
            <Topic number={1234} heading={"Killed Civilians"}/>
        </div>
    )
}