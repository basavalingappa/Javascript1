// // let username="Basava"
// // let age=31
// // let city="Bangalore"
// // console.log("My name is "+username+" and I am "+age+" years old. I live in "+city+".")
// // console.log(`My name is ${username} and I am ${age} years old. I live in ${city}.`)

// // let a=10
// // if (a>0){
// //     console.log("a is positive")
// // }
// // else if(a<0){
// //     console.log("a is negative")    
// // }
// // else {
// //     console.log("a is zero")
// // }
// // while loop
// let i=1
// while(i<=5){
//     if (i==4)
//     break;
//     console.log(i)
//     i++
// }
// //do while loop
// // let j=1
// // do{
// //     console.log(j)
// //     j++
// // }while(j<=5)    
// // // for loop
// // for(let k=1;k<=5;k++){
// //     console.log(k)
// // }   

// print the Number Even or Odd
// let num=7
// if(num%2==0){
//     console.log(`${num} is Even`)
// } else {
//     console.log(`${num} is Odd`)
// }
 
// // print prime number
// let num=3
// let isPrime=true
// for(let i=2;i<num;i++){
//     if(num%i==0){
//         isPrime=false
//         break
//     }
// }
// if(isPrime){
//     console.log(`${num} is a prime number`)
// } else {
//     console.log(`${num} is not a prime number`)
// }

// prime number

// let num=7
// let count=0
// for(let i=1;i<=num;i++){
//     if(num%i==0){
//         count++
//     }
// }
// if(count==2){
//     console.log(`${num} is a prime number`)
// } else {
//     console.log(`${num} is not a prime number`)
// }

// let num=1
// let studentNumber=[10,20,30,40,50]
// console.log(studentNumber)
// console.log(studentNumber.length)
// for(let num=0;num<studentNumber.length;num++){
//     console.log(studentNumber[num])
// }   
// // concating Arrays
// num1=[10,20,30,40,50]
// num2=[5,10,15,20,25]
// // num3=num1.concat(num2)
// // console.log(num1.concat(num2))
// num3=concat(num1,num2)
// console.log(num3)

// let students=new Set([10,20,30,40,50])
// students.add(60)
// students.delete(20)
// console.log(students)
// for (let student of students){
//     console.log(student)
// }
// let map=new Map([
//     ['name','Basava'],
//     ['age',31],
//     ['city','Bangalore' ]
// ])
// for (let [key,value] of map){
//     console.log(`${key} : ${value}`)
//     console.log(map.get('name'))
//     map.forEach((value,key)=>{
//         console.log(`${key} : ${value}`)
//     }   
//     )}
 
// Functions
// function add(a,b){
//     return a+b
// }   
// let result=add(10,20)
// console.log(result)
