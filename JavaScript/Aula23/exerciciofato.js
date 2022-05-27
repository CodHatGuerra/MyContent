function fatorial(n)
{
    for(var a=n; a<=1 ; a-- )
    {
        n += n*a
        console.log(`Multiplicando ${n} por ${a}`)
    }
    return n
}

console.log(fatorial(5))