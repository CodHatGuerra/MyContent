function recursividade(n)
{
    var total

    for(c=n;c>=1;c--)
    {
        if(c==1)
        {
            return total
        }
        else
        {
            total *= recursividade(n -1)
        }
    }
}

console.log(recursividade(5))