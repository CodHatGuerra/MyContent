function calcular()
{
    var valor = parseInt(document.querySelector("input#inptNumero").value)
    var select = document.querySelector("select#tabuada")
    select.innerHTML = ""

    
    for(var r=1; r <= 10; r++)
    {
        var opcao = []
        opcao[r] = document.createElement("option")
        opcao[r].text = `${valor} X ${r} = ${r * valor}`
        select.appendChild(opcao[r])
    }
}

