/// <reference path="../typings/index.d.ts" />
import * as React from "react"

interface ChildProps {
    bold: boolean
}

const Child: React.StatelessComponent<ChildProps> = ({bold}) => {
    if (bold) {
        return <div style={{fontWeight: "700"}}>Child</div>
    }
    return <div>Child</div>
}

export default Child
