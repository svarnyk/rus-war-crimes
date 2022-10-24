import React from "react";
import "./header.css";
import Heading from "../../primitives/heading/heading";
import PropTypes from "prop-types";

export default function Header (props){
    return(
        <div className="crimeTopography__header">
            <Heading weight={1} children={props.heading}/>
        </div>
    )
}
Header.propTypes = {
    heading: PropTypes.string.isRequired
}
Header.defaultProps = {
    heading: "Crime Topography"
}