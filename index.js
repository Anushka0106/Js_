// 1 . ways to print in js
// alert("me")
// document.write("this is document write")
// console.log("hello world!")
// console.warn("this is warninng")
// console.error("this is error")


/*2 .javascript condole api(apllication programming interface)
console.log("hello world!", 4 + 6, "another log")
console.warn("this is warninng")
console.error("this is error")*/


// 3 . javascript varibales
// what are varibales? - container to store data values
var number1 = 34;
var number2 = 67;
//console.log(number1 + number2);


//   4. data types in javascript
// Number
var num1 = 566;
var num2 = 56.6;
// String
var str1 = "this is string";
var str2 = "this is also string"
// Objects
var marks = {
    ram: 100,
    sita: 67,
    rita: 78

}

// boolean
// var a = true;
// var b =false;
// console.log(a , b)

// console.log(num1);
// console.log(num2);
// console.log(str1);
// console.log(str2);
// console.log(marks);

// undefied
// var und = undefined
// console.log(und)

// null
//var n = null
//console.log(n)

/*at a very high level , there are two type of data types in JS
1 . premetive datatypes:     unefined , null, boolean, string , number , symbol
2 . reference data types:    Arrays and objects
*/

// Arrays
// var arr =[1,2,3,4,5]
// console.log(arr)

// var arr =[1,2,"string",4,5]
// console.log(arr[2])


// operators in javascript
// arthematic operators
// var a = 34
// var b = 78
// console.log("the vale of a+b is ",a + b)
// console.log("the vale of a-b is ",a - b)
// console.log("the vale of a*b is ",a * b)
// console.log("the vale of a/b is ",a / b)
// console.log("the vale of a%b is ",a % b)

// // Assignment operators
// var c = b
// c +=2
// c -=2
// c /=2
// c *=2
// console.log(c)

// comparision operator
// var e =67
// var f  =98
// console.log(e == f)
// console.log(e >= f)
// console.log(e <= f)
// console.log(e > f)
// console.log(e < f)

// logical operators
// logical and 
// console.log(true && true)
// console.log(true && false)
// console.log(false && true)
// console.log(false && false)


// logical or 
// console.log(true || true)
// console.log(true || false)
// console.log(false || true)
// console.log(false || false)

// logical nor
// console.log(!false)
// console.log(! true)

// functions
// DRY=do not repeat yourself
// function avg(a , b){
//     return(a+b)/2
// }
// c1= avg(7,12)
// c2= avg(2 , 67)
// cnsole.log(c1)
// console.log(c2)


// if - else
// var age =prompt("enter your age")
// if (age>= 18){
// console.log("you are eligible to vote")}
// else{
// console.log("you are not eigible to vote")} 


// if - else ladder
/*var age =prompt("enter your age")
if (age <=2){
    console.log("you are baby")
}
else if (age<=18 && age >=2 ){
    console.log("your are teenage")
}
else if(age>=18 && age <=60){
    console.log("you are adult")

}
else {
    console.log("your in old age")
}*/
// FOR - LOOP


// var arr = [1, 2, 3, 4, 5]
// // console.log(arr)
// for(var i=0;i<arr.length;i++){
// if(i==2){
//     break
// }
// console.log(arr[i])}

// arr.forEach(function (element) {
//     console.log(element)
// })

// WHILE -LOOP


//let j = 0;
// while(j<arr.length){
//     console.log(arr[j])
// }j++;

// DO - WHILE LOOP


// do {
//     console.log(arr[j])console.log(myString.indexOf("day"))
//     j++;
// }
// while (j < arr.length)

// let myArr =["fan" , "camera", 56,null,true];
//ARRAY METHODS
// console.log(myArr.length)
// myArr.pop()
// myArr.push("harry")
// myArr.shift()
// const newlen = myArr.unshift("harry")
// console.log(newlen)
// console.log(myArr)

// STRING METHODS
let myString = "this is beautiful day "
// console.log(myString.length)
// console.log(myString.indexOf("day"))
// console.log(myString.lastIndexOf("day"))

// console.log(myString.slice(1,22))
// d = myString.replace("beautiful ", "boring ")
// console.log(myString, d)


let myDate = new Date();
// console.log(myDate.getTime())
// console.log(myDate.getFullYear())
// console.log(myDate.getDay())
// console.log(myDate.getHours())


// DOM MANIPULATION

let elm = document.getElementById('click')
//console.log(elm)
let elmClass = document.getElementsByClassName("container")
//console.log(elmClass)
// elmClass[0].style.background = "black"
// elmClass[0].classList.add("bg-primary")
// elmClass[0].classList.add("text-success")
// console.log(elm.innerHTML)
// console.log(elm.innerText)
// console.log(elmClass[0].innerHTML)
// console.log(elmClass[0].innerText)
tn = document.getElementsByTagName('div')
// console.log(tn)
// createElement = document.createElement('p')
// createElement.innerText = "this is created para"
// tn[0].appendChild(createElement);

// createElement2 = document.createElement2('b')
// createElement2.innerText = "this is created bold"
// tn[0].replaceChild(createElement2 , createElement);


// SELECTING USING QUERY

sel = document.querySelector(".container")
console.log(sel)
sel = document.querySelectorAll(".container")
console.log(sel)

// events in js
function clicked(){
console.log("the button was clicked")
}
window.onload = function(){
    console.log("the document was loaded")
}

firstcontainer.addEventlistener('click' , function(){
    console.log("the button was clicked hua")
})

firstcontainer.addEventlistener('onmouseover', function(){
    console.log("the mouse work")
})