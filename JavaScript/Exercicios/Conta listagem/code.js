let valores = []

function adicionar()
{
    var entrada = parseInt(document.querySelector("input#entrada").value)
    var seletor = document.querySelector("select#slLista")


    if(entrada > 0)
    {
        if(seletor.length > 0)
        {
            if(valores.indexOf(Number(entrada)) == -1)
            {
                let novaopt = new Option(`Valor Adicionado ${entrada}`, `${entrada}`)
                seletor.add(novaopt) 
                valores.push(parseInt(entrada))

            }
            else
            {
                window.alert("Valor Informado Ja está Cadastrado na Lista !")
            }
        }
        else
        {
            let novaopt = new Option(`Valor Adicionado ${entrada}`, `${entrada}`)
            seletor.add(novaopt) 
            valores.push(parseInt(entrada))
        }
    }
    else
    {
        window.alert("Valor Digitado Deve Ser Maior que 0 !")
    }
}

function calcular()
{
    var maior=0
    var menor=0
    var media =0
    var total=0

    valores.sort

    for(var c in valores)
    {   
        total += valores[c] 
    }

    maior = Math.max.apply(null, valores)
    menor = Math.min.apply(null, valores)


    media = (total / (valores.length))

    var divresp = document.querySelector("div#resposta")

    var respmaior = document.createElement("h3")
    respmaior.innerHTML = `O maior valor e ${maior}`
    var respmenor = document.createElement("h3")
    respmenor.innerHTML = `O menor valor e ${menor}`
    var respmedia = document.createElement("h3")
    respmedia.innerHTML = `a media e ${media}`
    var resptotal = document.createElement("h3")
    resptotal.innerHTML = `O total e  ${total}`

    divresp.appendChild(respmaior)
    divresp.appendChild(respmenor)
    divresp.appendChild(respmedia)
    divresp.appendChild(resptotal)


    
}