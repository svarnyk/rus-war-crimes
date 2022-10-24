import React from "react"
import Heading from "./heading"

export default {
    title: "Primitives/Heading",
    component: Heading,
    argTypes: {
        weight: {
            weight: [1, 2, 3, 4, 5, 6],
            control: {type: "radio"},
        },
    },
}

export function Heading1(args) {
    return (
        <div style={{backgroundColor: "black"}}>
            <Heading {...args}>Crime Topography</Heading>
        </div>
    )
}

Heading1.args = {
    weight: 1,
}

export function Heading2(args) {
    return (
        <div style={{backgroundColor: "black"}}>
            <Heading {...args}>Best Creators</Heading>
        </div>
    )
}

Heading2.args = {
    weight: 2,
}

export function Heading3(args) {
    return (
        <div style={{backgroundColor: "black"}}>
            <Heading {...args}>Anna May</Heading>
        </div>
    )
}

Heading3.args = {
    weight: 3,
}
