/*
1. Write a function that will print
   all even numbers up to a given 
   input. It should work with odd numbers.


**HINT: Is there a way you can change the increment on a 
for loop?


EXAMPLE: 

evenPrint(10) => 2,4,6,8,10
evenPrint(20) => 2,4,6,8,10,12,14,16,18,20

evenPrint(9) => 2,4,6,8
evenPrint(13) => 2,4,6,8,10,12
*/


function evenPrint(number){
  //CODE BELOW HERE
for (var i=1;i<=number;i++){
  if(i%2===0){
    console.log(i)
  }
}
  //CODE ABOVE HERE
}

evenPrint(30)





/*
2. Write a function that will print
   all odd numbers up to a given 
   input. It should work with even numbers.


**HINT: Is there a way you can change the increment on a 
for loop?


EXAMPLE: 

oddPrint(9) => 1,3,5,7,9
oddPrint(21) => 1,3,5,7,9,11,13,15,17,19,21

oddPrint(10) => 1,3,5,7,9
oddPrint(12) => 1,3,5,7,9,11
*/


function oddPrint(number){
  //CODE BELOW HERE
for(var i=1;i<=number;i++){
  if(i%2===1){
    console.log(i)
  }
}

  //CODE ABOVE HERE
}
oddPrint(12)






/*
3. Write a function that will print
   all numbers up to a given 
   input but display even if the number is even
   and odd if the number is odd. Start your loop at 0.


EXAMPLE: 

evenOdd(5) => even, odd, even, odd, even, odd
*/


function evenOdd(number){
  //CODE BELOW HERE
for(var i=1;i<=number;i++){
  if(i%2===0){
    console.log ('even')
  } else{
    console.log('odd')
  }
}

  //CODE ABOVE HERE
}

evenOdd(10)

  //CODE ABOVE HERE






/*
4. Write a function that will print
   all numbers counting up to a given 
   input. 


EXAMPLE: 

countUp(10) => 1,2,3,4,5,6,7,8,9,10
*/


function countUp(number){
  //CODE BELOW HERE
 for (var i=1;i<=number;i++){
     if(i%2===0){
     }
 }
   console.log()


  //CODE ABOVE HERE
}
countup(23)


/*
5. Write a function that will print
   all numbers counting down from a given 
   input to 1. 


EXAMPLE: 

countDown(10) =>10,9,8,7,6,5,4,3,2,1
*/


function countDown(number){
  //CODE BELOW HERE
  for (var i=1;i<=number;i++){
    if(i%2===0){
    }
  }
  //CODE ABOVE HERE
}