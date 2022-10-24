// eslint-disable-next-line no-unused-vars
import React from "react";
import Topic from "./topic";
import {number, string} from "prop-types";

export default {
    title: "Partials/Topic",
    component: Topic,
    argTypes:{
        number:number,
        heading: string
    }
}
function Template (args) {
    return (
        <div style={{backgroundColor: "black"}}>
            <Topic {...args}/>
        </div>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    number: 1234,
    heading: "Killed Civilians"
}