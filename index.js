// Iteration 1: Names and Input

const hacker1 = "Kristina";
console.log(`The driver's name is ${hacker1}`);
const hacker2 = "Pablo";
console.log(`The navigator's name ins ${hacker2}`);

// Iteration 2: Conditionals

if (driverLength > navLength) {
    console.log(`The driver has the longes name, it has ${driverLength} characters`);
  } else if (navLength > driverLength) {
    console.log(`It seems that the navigator has the longest name, it has ${navLength} characters.`);
  } else {
    console.log(`Wow, you both have equally long names, ${navLength} characters!`)
  }

// Iteration 3: Loops

const toUpper = hacker1.toUpperCase();
let upSpace = "";

for (let i = 0; i < toUpper.length; i++) {
  
  if (i < toUpper.length-1) {
    upSpace += `${toUpper[i]} `;
  } else {
    upSpace += `${toUpper[i]}`;
  }
  
}

console.log(upSpace);

let reverse = "";

for (let i = hacker2.length-1; i >= 0; i--) {
  reverse += `${hacker2[i]}`
}

console.log(reverse);

let namesArr = [hacker2, hacker1];

namesArr.sort();

if (namesArr.indexOf(hacker1) < namesArr.indexOf(hacker2)) {
  console.log(`The driver's name goes first.`);
} else if (namesArr.indexOf(hacker2) < namesArr.indexOf(hacker1)) {
  console.log(`Yo, the navigator goes first definitely.`);
} else `What?! You both have the same name?`

//Bonus Time!

//Bonus 1

const longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

const longArr = longText.split(" ");

console.log(`The number of words on the paragraphs is ${longArr.length}`);

let count = 0;

longArr.forEach(item => {
  if (item === 'et') count += 1
});

console.log(`The number of times "et" is on the paragraphs is ${count}`);

//Bonus 2

let phraseToCheck;

//OPTION 1: TO EVAL AN ARRAY OF PRASES:

const palindromeArr = ["A man, a plan, a canal, Panama!", "Amor, Roma", "race car", "stack cats", "step on no pets", "taco cat", "put it up", "Was it a car or a cat I saw?",  "No 'x' in Nixon"];

palindromeArr.forEach(phrase => {
  
    let lowerCase = phrase.toLowerCase();
    
    let onlyLetters = "";

    let reversePhrase = "";

    for (let i = 0; i < lowerCase.length ; i++) {
        if (lowerCase[i].match(/[A-z]/gi)) {
            onlyLetters += `${lowerCase[i]}` 
        }
    }

    for (let i = onlyLetters.length-1; i >= 0 ; i--) {
        reversePhrase += `${onlyLetters[i]}` 
    }

    if (onlyLetters == reversePhrase) {
        console.log(`It's a Palindrome!!`)
    } else console.log(`Sorry, but not a Palindrome`)
  
})

//OPTION 2: TO EVAL A SINGLE PRASE:

let phraseToCheck2 = "A man, a plan, a canal, Panama!";

let lowerCase = phraseToCheck2.toLowerCase();

let onlyLetters = "";

let reversePhrase = "";

for (let i = 0; i < lowerCase.length ; i++) {
  if (lowerCase[i].match(/[A-z]/gi)) {
     onlyLetters += `${lowerCase[i]}` 
  }
}

for (let i = lowerCase.length-1; i >= 0 ; i--) {
  if (lowerCase[i].match(/[A-z]/gi)) {
     reversePhrase += `${lowerCase[i]}` 
  }
}

if (onlyLetters == reversePhrase) {
     console.log(`It's a Palindrome!!`)
  } else console.log(`Sorry, but not a Palindrome`)