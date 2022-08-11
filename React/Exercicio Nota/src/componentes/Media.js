import React from "react";

export default function Media(props) {
    return(
        <>
        <p>Nota Total:  {props.tot}</p>
        <p>Estado Aluno: {props.tot > 60 ?"Aprovado":"Reprovado"}</p>
        </>
    )
}