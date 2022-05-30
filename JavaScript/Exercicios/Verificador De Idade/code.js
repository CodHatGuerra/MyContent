var btn = document.querySelector('input#bttn').addEventListener('click', Verificar)

function Verificar()
{
    var campoData = parseInt(document.querySelector('input#data').value) 
    var Idade = 2022 - campoData
    var msg = document.querySelector('h2#msg')
    var sexo = document.getElementsByName('rdSexo')
    var img = document.createElement('img')
    var dinamico = document.querySelector('div#dinamico')
    img.setAttribute('id' , 'imagem')
    if(Idade <= 10)
    {
        if(sexo[0].checked)
        {
            img.setAttribute('src', 'img/ch.jpg')
            msg.innerHTML = `Sua Idade é ${Idade} e voce é um Menino e é Criança`
        }
        else
        {   
            img.setAttribute('src', 'img/cm.jpg')
            msg.innerHTML = `Sua Idade é ${Idade} e voce é uma Menina e é Criança`
        }
    }
    else if(Idade <=50 )
    {
        if(sexo[0].checked)
        {   
            img.setAttribute('src', 'img/ah.jpg')
            msg.innerHTML = `Sua Idade é ${Idade} e voce é um Homem e é Adulto`
        }
        else
        {   
            img.setAttribute('src', 'img/am.jpg')
            msg.innerHTML = `Sua Idade é ${Idade} e voce é uma Mulher e é Adulta`
        }
    }
    else
    {
        if(sexo[0].checked)
        {   
            img.setAttribute('src', 'img/im.jpg')
            msg.innerHTML = `Sua Idade é ${Idade} e voce é um Homem e é Idoso`
        }
        else
        {   
            img.setAttribute('src', 'img/im.jpg')
            msg.innerHTML = `Sua Idade é ${Idade} e voce é uma Mulher e é Idosa`
        }
    }
    dinamico.appendChild(img)
}