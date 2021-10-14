// Q1  Write a function to get the sum of n natural numbers.

// function sumofn(n){
//     return (n*(n+1))/2;
// }

// let ans=sumofn(5);
// console.log(ans)

// Q2. write the function to check if the number is even or not by using only if else statement

// function evenodd(n){
//     if(n%2==0){
//         console.log("Even Number");
//     }else{
//         console.log("Odd Number");
//     }
// }

// evenodd(100)


// Q3. Write a function it check if the number is prime or not.

// function isPrime(num) {

//     if (num === 1) {
//       return true;
//     } else if (num > 1) {
//       for (var i = 2; i < num; i++) {
  
//         if (num % i !== 0) {
//           return true;
//         } else if (num === i * i) {
//           return false
//         } else {
//           return false;
//         }
//       }
//     } else {
//       return false;
//     }
  
//   }
  
//   isPrime(6)?console.log("Prime Number"):console.log("Not a prime Number")

  
// Q4. Write a function ‘weekDay’ that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using switch case only

// function weekday(n){
//     switch(n){
//         case 1:
//             console.log("SUNDAY");
//             break;
//         case 2:
//             console.log("MONDAY");
//             break;
//         case 3:
//             console.log("TUESDAY");
//             break;
//         case 4:
//             console.log("WEDNESDAY");
//             break;
//         case 5:
//             console.log("THURSDAY");
//             break;
//         case 6:
//             console.log("FRIDAY");
//             break;
//         case 7:
//             console.log("SATURSDAY");
//             break;    
//         default:
//             console.log("INVALID DAY");                    
//     }
// }

// weekday(7)

// Q5. Write a function ‘weekDay’ that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using If Else only.

// function weekday(n){
//     if(n===1){
//         console.log("SUNDAY");       
//     }else if(n===2){
//         console.log("MONDAY");       
//     }else if(n===3){
//         console.log("TUESDAY");       
//     }else if(n===4){
//         console.log("WEDNESDAY");       
//     }else if(n===5){
//         console.log("THURSDAY");       
//     }else if(n===6){
//         console.log("FRIDAY");       
//     }else if(n===7){
//         console.log("SATURSDAY");       
//     }else{
//         console.log("INVALID DAY")
//     }
// }

// weekday(5)

// Write a function ‘weekDay’ that takes n as the input and returns the day associated to it. If n<1 or n>7 then return invalid input. Using ternary operator only.

// function weekday(n){
//     (n===1)?console.log("SUNDAY"):
//     (n===2)?console.log("MONDAY"):
//     (n===3)?console.log("TUESDAY"):
//     (n===4)?console.log("TUESDAY"):
//     (n===5)?console.log("THURSDAY"):
//     (n===6)?console.log("FRIDAY"):
//     (n===7)?console.log("SATURSDAY"):
//     console.log("INVALID DAY");
// }

// weekday(4)

// Q7. WAF to search an element in the array?

// function search(a,x){
//     const searchedvalue = a.find(ele => ele==x)
//     return searchedvalue;
// }

// if(search([2,1,6,5,7],8)){
//     console.log("Element is searched")
// }else{
//     console.log("Element is Not searched")
// }


// Q8. WAF to find the max in the array

// function maximun(a){
//     return Math.max(...a);
// }

// console.log(maximun([2,1,6,5,7]))

// Q9. WAF to find the min in the array?

// function minimum(a){
//         return Math.min(...a)
//     }
    
//     console.log(minimum([2,1,6,5,7]))


// Q10. WAF to find the factorial of n

// function fact(n){
//     if(n===0 || n===1)return 1;
//     else return n*fact(n-1);
// }

// console.log(fact(3))

// Q11. WAF to reverse an array

// function reverse(a){
//     let b = a.reverse();
//     return b;
// }

// console.log(reverse([1,2,3,4,5]))

// Q12. WAF to reverse a string.

// function reversestr(str){
//     return str.split("").reverse().join("");
// }

// console.log(reversestr("yashank"))

// Q13. WAF to check if the number is a palindrome or not.

// function pal(n){
//     let temp,rev=0;
//     while(n!=0){
//         temp=n%10;
//         rev=(rev*10)+temp;
//         n=parseInt(n/10);
//     }
//     return rev;
// }

// let n=121;
// if(pal(n)===n){
//     console.log("Palindrom Number");
// }else{
//     console.log("Not Palindrom")
// }