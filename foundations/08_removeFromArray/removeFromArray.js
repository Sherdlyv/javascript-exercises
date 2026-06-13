const removeFromArray = function(arr, ...removeItem) {

   return arr.filter(item => !removeItem.includes(item));
    }
    

    


// Do not edit below this line
module.exports = removeFromArray;
