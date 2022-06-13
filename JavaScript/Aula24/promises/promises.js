function jaRealizada()
{
   return  Promise.resolve(20)
}


jaRealizada().then(() =>(console.log('Promises resolvida')))