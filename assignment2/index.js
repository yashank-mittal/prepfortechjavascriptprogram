// Q1. WAF to check if the string entered is the palindrome string or not.

// function palindrome(str){
//     let arrayval=str.split('');
//     let reversearray=arrayval.reverse();
//     let str2=reversearray.join('');
//     (str===str2)?console.log("It's a palindrom"):console.log("Not a palindrome");
// }

// palindrome("peep");


// Q2. WAF to count the number of words in the string.

// function countstring(str){
//     console.log(str.split('').length);
// }

// countstring("yash")

// Q3. WAF to print the number of days in the month using switch case.

// function noofdays(month){
//     switch(month){
//         case 1:
//         case 3:
//         case 5:
//         case 7:
//         case 8:
//         case 10:
//         case 12:
//             console.log("31 days");
//             break;
//         case 2:
//             console.log("28/29 days");
//             break;    
//         case 4:
//         case 6:
//         case 9:
//         case 11:
//             console.log("30 days");
//             break;
//     }
// }

// noofdays(4);

// Q4. WAF to check if the number is 0, -ve or +ve using switch case.

// function check(num){
//     switch(Math.sign(num)){
//         case 1:
//             console.log("Positive Number");
//             break;
//         case 0:
//             console.log("Zero Number");
//             break;    
//         default:
//             console.log("Negative Number");
//     }
// }

// check(1)

// Q5. WAF to check if the number is even or not using if else

// function evenorodd(num){
//     (num%2==0)?console.log("Number is even"):console.log("Number is Odd");
// }

// evenorodd(3)

// Q6. WAF to check if the number is even or not using switch case.

// function evenodd(num){
//     switch(num%2){
//         case 0:
//             console.log("Even Number");
//             break;
//         case 1:
//             console.log("Odd Number");
//             break;    
//     }
// }

// evenodd(3)

// Q7. WAF to reverse only words in the string.
//     //     Example:
//     //     “Hello this is sample”
//     //     o/p
//     //     ‘olleH siht si elpmas’

// function reversewords(str){
//     var arrayval=str.split(' ').map(word => word.split('').reverse().join(''));
//     console.log(arrayval);
// }

// reversewords("Hello this is sample")


// Q8. WAF to count the occurrence of a given characters in the string.


// function occurrenceofchar(str,letter){
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(str.charAt(i) == letter){
//             count+=1;
//         }
//     }
//     console.log(`${letter} is occured at ${count} times`);
// }

// occurrenceofchar("yaashank",'a')