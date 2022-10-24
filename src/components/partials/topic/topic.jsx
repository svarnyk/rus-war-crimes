import React from "react";
import "./topic.css";
import Heading from "../../primitives/heading/heading";
import PropTypes from "prop-types";

export default function Topic (props) {
    const number = props.number.toLocaleString('ru')
    return(
        <div className="topic">
            <div className="topic__value"><Heading weight={1} children={number}/></div>
            <div className="topic__heading"><Heading weight={3} children={props.heading}/></div>
        </div>
    )
}
Topic.propTypes = {
    number: PropTypes.number.isRequired,
    heading: PropTypes.string.isRequired
}
Topic.defaultProps = {
    number: 1234,
    heading: "Killed Civilians"
}




