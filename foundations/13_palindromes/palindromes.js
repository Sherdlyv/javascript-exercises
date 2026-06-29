const palindromes = function (a) {

   let lowerCaseWord = a.toLowerCase();

   let cleanedWord = lowerCaseWord.replace(/[^a-z0-9]/g, "");

let reversedWord = cleanedWord.split("").reverse().join("");


if(reversedWord === cleanedWord ){
    return true;
}
else if(reversedWord === 1){
    return false;
}

else{
    return false;
}

};

// Do not edit below this line
module.exports = palindromes;
