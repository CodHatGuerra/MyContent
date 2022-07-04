//Criação de Promises

const myPromise = new Promise((resolve,reject) =>{
   let nome = "Gabriel"

   if(nome == "Gabriel")
   {
      resolve("Usuario Gabriel Foi Encontrado!")
   }
   else
   {
      reject("o Usuario Gabriel Nao foi Encontrado!")
   }
})


myPromise.then((data)=>{
   console.log(data)
})


//Encadeamento de Then's

const myPromise2 = new Promise((resolve,reject) =>{
   let nome = "Gabriel"

   if(nome == "Gabriel")
   {
      resolve("Usuario Gabriel Foi Encontrado!")
   }
   else
   {
      reject("o Usuario Gabriel Nao foi Encontrado!")
   }
})

myPromise2.then((data)=>{
   return data.toLowerCase()
}).then((stringModificada)=>{
   console.log(stringModificada)
})



// retrono do catch

const myPromise3 = new Promise((resolve,reject) =>{
   let nome = "joão"

   if(nome == "Gabriel")
   {
      resolve("Usuario Gabriel Foi Encontrado!")
   }
   else
   {
      reject("o Usuario Gabriel Nao foi Encontrado!")
   }
})


myPromise3.then((data)=>{
   console.log(data)
}).catch((err) => {
   console.log("Aconteceu um Erro" + err)
})


// resolver varias promessas com all

const p1 = new Promise((resolve, reject)=>{
   resolve("p1 OK!")
})
const p2 = new Promise((resolve, reject)=>{
   resolve("p2 OK!")
})
const p3 = new Promise((resolve, reject)=>{
   resolve("p3 OK!")
})

const resolveALL = Promise.all([p1, p2, p3]).then((data)=>{
   console.log(data)
})


//varias promessas com race

const p4 = new Promise((resolve, reject)=>{
   setTimeout(()=>{
      resolve("p4 ok! timeout")
   })
})
const p5 = new Promise((resolve, reject)=>{
   resolve("p5 OK!")
})
const p6 = new Promise((resolve, reject)=>{
   resolve("p6 OK!")
})

const resolveALLRace = Promise.race([p4, p5, p6]).then((data)=>{
   console.log(data)
})


//Fetch request na API do GitHub
// Fetch API

const userName = 'CodHatGuerra'

fetch(`https://api.github.com/users/${userName}`, {
   method: 'GET',
   headers: {
      Accept: 'application/vnd.github.v3+json',
   },
}).then((response)=>{
   console.log(response)
   return response.json()
}).then((data)=>{
   console.log(data)
   console.log(`O Login do Usuario é ${data.login}`)
}).catch((err) => (
   console.log("Houve Algum Erro" + err)
))