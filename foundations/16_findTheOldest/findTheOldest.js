const findTheOldest = function(arr) {

    let currentYear = new Date().getFullYear();

    let oldest = arr.sort((a,b)=>{

        let deathA = a.yearOfDeath ? a.yearOfDeath : currentYear;
        let deathB = b.yearOfDeath ? b.yearOfDeath : currentYear;


        let ageA = deathA - a.yearOfBirth;
        let ageB = deathB - b.yearOfBirth;

     return ageB - ageA;

    });

  return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
