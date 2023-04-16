function findLargestNumber(num1, num2, num3) {
    let largest = num1;
    if (num2 > largest) {
      largest = num2;
    }
    if (num3 > largest) {
      largest = num3;
    }
    return largest;
  }
  
  console.log(findLargestNumber(10, 25, 5)); // Output: 25
  
  