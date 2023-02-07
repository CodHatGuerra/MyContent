/************************************************************
 * JAVASCRIPT STRING METHODS & PROPERTIES - PART 2
 ************************************************************/
let myString = 'Javascript is the best';

//toUpperCase() - CONVERTS ALL LETTERS OF A STRING TO UPPERCASE
//toLowerCase() - CONVERTS ALL LETTERS

//SIMPLY CONVERT IT INTO UPPERCASE, BUT DONT CHANGE ORIGINALLY STRING
let toUpper = myString.toUpperCase();
console.log(toUpper);

let toLower = myString.toLocaleLowerCase();
console.log(toLower);

//WRITE A FUNCTION WHICH WILL UPDATE THE LETTER CASE IN A WORD
//1. FIRST LETTER OF THE WORD SHOULD BE IN UPPER CASE
//2. REST ALL OTHER LETTERS SHOULD BE IN LOWER CASE

function firstToUpper(word) {
    let lower = word.toLocaleLowerCase();
    let update = lower[0].toUpperCase() + lower.slice(1);
    return update;
}

console.log(firstToUpper('TEste'));
console.log(firstToUpper('MANGA'));
console.log(firstToUpper('abacate'));

//TRIMING SPACES BEFORE AND AFTER A STRING
let str = '  Hello   '
console.log(str);

//trimStart() - REMOVES SPACES FROM THE START OF A STRING
//trimEnd() - REMOVES SPACES FROM THE END OF A STRING
//trim() - REMOVES SPACES FROM THE START & END OF A STRING
console.log('-----TRIM-----');
console.log(str.trimStart());
console.log(str.trimEnd());
console.log(str.trim());


//REPLACING CHARACTERS / WORDS IN A STRING ( BUT ONLY THE FIRST OCCURANCE)
let greet = 'Hey there. How are you doing today.';
let strReplace = greet.replace('.', '!')
console.log(strReplace);

//REPLACE ALL OCCURANCE let greet = 'Hey there. How are you doing today.';
let strReplace1 = greet.replaceALL('.', '!')
console.log(strReplace1);

//17:25
//https://www.youtube.com/watch?v=2tbkCy-D1LY&list=PL1BztTYDF-QPMwbOB-gRHM_vPKxDAJ-h0&index=14