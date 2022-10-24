import React from "react";
import Header from "./header";
import {string} from "prop-types";

export default {
    title: "Partials/Header",
    component: Header,
    argTypes:{
        heading: string
    }
}

function Template(args){
    return(
        <div style={{backgroundColor: "black"}}>
            <Header {...args}/>
        </div>
    )
}

export const Primary = Template.bind({})

Primary.args = {
    heading: "Crime Topography"
}