function contar()
{
    var inicio = parseInt(document.querySelector("input#inpInicio").value)
    var passo = parseInt(document.querySelector("input#inpPasso").value)
    var fim = parseInt(document.querySelector("input#inpFim").value)
    var resp = document.createElement("p")
    var div = document.querySelector("div#dinamico")
    resp.setAttribute("ID", "Resp")
    var resposta = ""


    for(i=inicio; i <= fim;i += passo)
    {
        resposta += `&#9193 ${i} `
    }

    resp.innerHTML = `${resposta} `
    div.appendChild(resp)

}