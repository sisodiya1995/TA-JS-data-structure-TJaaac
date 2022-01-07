// 1. Create an array named numbers and store 5 number values in it
     let numbers = [2,4,5,8,9];

// 2. Calculate the sum of array items and print it to the console using console.log()
         let sum =0;
      for(let number of numbers){
            sum = sum + number;
      }
      console.log(`sum of array ${sum}`);
      
// 3. Calculate the average of array items and print it to the console using console.log()
       let sum1 =0;
      for(let number of numbers){
           sum1 = sum1 + number;
     }
     console.log(`average of array ${sum1 / 5}`);
    

// 4. Find the highest number in the array and print it to the console using console.log()
function largest(arr) {  

    let max = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) 
            max = arr[i]; 
    } 
    return max; 
} 
console.log(largest([4.6,8,9,34]));

// 5. Find the lowest number in the array and print it to the console using console.log()
function lowest(arr) {  

    let low = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < low) 
            low = arr[i]; 
    } 
    return low; 
} 
console.log(lowest([4,6,8,1]));
// 6. Find the even numbers in the array and print them to the console using console.log()
       for(let number of numbers){
           if(number % 2 === 0){
               console.log(`even number is ${number}`);
           }
       }

// 7. Find the odd numbers in the array and print them to the console using console.log()
       for(let number of numbers){
           if(number % 2 !== 0){
               console.log(`odd number is ${number}`);
           }
       }     
// 8. Find the numbers in the array that is divisible by 5 and print them to the console using console.log()
for(let number of numbers){
    if(number % 5 == 0){
        console.log(`number divisible by 5 are ${number}`);
    }
}     

// 9. Log all the element of the array one by one

for(let number of numbers){
    console.log(`array element are ${number}`);
}
// 10. Find all the number in the array that is divisible by 3

for(let number of numbers){
    if(number % 3 == 0){
        console.log(`number divisible by 3 are ${number}`);
    }
}     