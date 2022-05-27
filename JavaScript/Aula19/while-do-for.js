var teste = 10

function subtrair()
{
    console.log(teste)
    teste--
}

function somar()
{
    teste++
    console.log(teste) 
}

while(teste != 0)
{
    subtrair()
}


do
{
    somar()
}while (teste != 10)

for(var a=1; a <=4; a++)
{
    console.log(a)
}