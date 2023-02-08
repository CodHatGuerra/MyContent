/****************************************************
 * JAVASCRIPT STRING METHODS & PROPERTIES - PART 3
 ****************************************************/
let myString = 'JavaScript is the best'
let anotherString = 'This-is-another-string'

//Split() - SPLIT A STRING INTO MUULTIPLE STRINGS BASED ON A DEVIDER
//AND RETURNS AN ARRAY YOF STRING
console.log('------SPLIT()--------');
let strArray = myString.split(' ')
console.log(strArray);
let anotherArray = anotherString.split('-');
console.log(anotherArray);

//GET USERS FIRSTNAME, MIDDLENAME & LASTNAME FROM HIS FULLNAME
function printNames(fullName) {
 let [fName, mName, lName] = fullName.split(' ')
 console.log(fName, mName, lName);
}
printNames('Gabriel Fernando Guerra');
printNames('Marco Antonio Abile')


//JOIN() - JOINS THE STRIN ELEMENTS OF AN ARRAY INTO SINGLE STRING
console.log('-----JOIN()-------');
let strArrayJoin = ['My', 'name' , 'is', 'John']
console.log(strArrayJoin.join(' '));//THIS ARGUMENT IS A SEPARATE OF THE JOIN,

//FORMAT THE FIRST LETTER OF EACH NAME IN UPPER CASE

console.log('-------EXAMPLE---------');
function formatName(fullName) {
    let nameArr = fullName.toLocaleLowerCase().split(' ')
    let storedName = [];
    let jointName = '';

    for (const name of nameArr) {
        storedName.push(name[0].toUpperCase() + name.slice(1));
    }
    jointName = storedName.join(' ')
    return jointName;
}

console.log(formatName('gabriel FERNADO dos santos guerra'));

//17:18
//https://www.youtube.com/watch?v=MiDIPhfSwC8&list=PL1BztTYDF-QPMwbOB-gRHM_vPKxDAJ-h0&index=15&ab_channel=Errichto