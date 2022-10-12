function getCommonElements(array1, array2) {
    // Change code below this line
  let commonArray = [];
    for (let i = 0; i <= array1.length; i += 1) {
      if (array2.includes(array1[1])) {
        commonArray.push(array1[1]);
      }
    }
    return commonArray;
  
  
   // Change code above this line
  }