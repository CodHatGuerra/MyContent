window.onload = function() {veriricar()}

function veriricar() {
    var horas = new Date().getHours()
    var h1 = document.querySelector('h2#msg')
    var img = document.querySelector('img#img')


    if(horas < 11)
    {
        h1.innerHTML = `Agora Sao: ${horas} Horas`
        img.src = 'img/manha.png'
    }
    else if(horas < 17)
    {
        h1.innerHTML = `Agora Sao: ${horas} Horas`
        img.src = 'img/tarde.jpg'

    }
    else
    {
        h1.innerHTML = `Agora Sao: ${horas} Horas` 
        img.src = 'img/noite.jpg'
    }
}
