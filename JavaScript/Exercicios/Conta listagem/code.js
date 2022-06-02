function adicionar()
{
    var entrada = parseInt(document.querySelector("input#entrada").value)
    var seletor = document.querySelector("select#slLista")
    const valores = []
    var entrada = parseInt(document.querySelector("input#entrada").value)
    var seletor = document.querySelector("select#slLista")
    for(c = 0; c <= seletor; c++)
    {
        valores[c] = seletor.option[c].value
    }
    if(entrada > 0)
    {
        if(seletor.length > 0)
        {
            if(valores.includes(entrada) == true)
            {
                window.alert("Valor Informado Ja está Cadastrado na Lista !")
            }
            else
            {
                let novaopt = new Option(`Valor Adicionado ${entrada}`, `${entrada}`)
                seletor.add(novaopt) 
            }
        }
        else
        {
            let novaopt = new Option(`Valor Adicionado ${entrada}`, `${entrada}`)
            seletor.add(novaopt) 
        }
    }
    else
    {
        window.alert("Valor Digitado Deve Ser Maior que 0 !")
    }
}
