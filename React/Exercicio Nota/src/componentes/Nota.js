import React from "react";

export default function Nota(props) {
    return (
        <>
            <labe>Nota {props.num}</labe><br/>
            <input
                type="text"
                name={props.name}
                value={props.nota}
                onChange={(e) => props.setNotas(e)}
            /><br/>
        </>
    )
}