import React,{useState} from "react";
import Nota from "./componentes/Nota"
import Media from "./componentes/Media"

export default function App() {
    const [notas,setNotas] = useState({"nota1": "0", "nota2": "0", "nota3": "0", "nota4": "0"})

    const handleSetNotas = (e) => {
        if(e.target.getAttribute('name') == "fnota1") {
            setNotas({"nota1": e.target.value, "nota2": notas.nota2, "nota3": notas.nota3, "nota4": notas.nota4})
        }
        else if(e.target.getAttribute("name") == "fnota2") {
            setNotas({"nota1": notas.nota1, "nota2": e.target.value, "nota3": notas.nota3, "nota4": notas.nota4})
        }
        else if(e.target.getAttribute("name") == "fnota3") {
            setNotas({"nota1": notas.nota1, "nota2": notas.nota2, "nota3": e.target.value, "nota4": notas.nota4})
        }
        else if(e.target.getAttribute("name") == "fnota4") {
            setNotas({"nota1": notas.nota1, "nota2": notas.nota2, "nota3": notas.nota3, "nota4": e.target.value})
        }
    }

    return (
        <>
            <Nota
                num={1}
                name={"fnota1"}
                setNotas={handleSetNotas}
                value={notas.nota1}
            />
            <Nota
                num={2}
                name={"fnota2"}
                setNotas={handleSetNotas}
                value={notas.nota2}
            />
            <Nota
                num={3}
                name={"fnota3"}
                setNotas={handleSetNotas}
                value={notas.nota3}
            />
            <Nota
                num={4}
                name={"fnota4"}
                setNotas={handleSetNotas}
                value={notas.nota4}
            />
            <Media
                tot={parseFloat(notas.nota1)+parseFloat(notas.nota2)+parseFloat(notas.nota3)+parseFloat(notas.nota4)}
            />
        </>
    )
}