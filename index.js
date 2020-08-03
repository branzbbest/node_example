/*const obj = {
    arr:[
        {
            name: "Ortis"
        },
        false
    ]
}

console.log(obj.arr[0].name);

let f1 = 2;
let f2 = 3;

console.log(((f1 += 5) >= 10) && ((f2 += 5) >= 10))
console.log(f1,f2)

const someVar = "50" + 20
console.log(someVar ,typeof someVar)

let text = '20';
text += 20;
console.log(text);

console.log(200 == "200")

const arr = [1,2,3,4]
const arr2 = [1,2,3,4]
const arr3 = [...arr,5]
console.log(arr===arr2)
console.log(arr3)

const obj = {num1: 10, num2: 20}

//const num1 = obj.num1
//const num2 = obj.num2
const {num1,num2} = obj

const arr4 = [1,2,3,4]
//const num3 = arr4[0]
//const num4 = arr4[1]
const [num3,num4] = arr4
console.log(num3)*/

//for in --> key
//for of --> value

/*function sum() {

}
let sum = function() {

}
let sum2 = () => {

}
let sum = (num1,num2) =>{
    return num1+num2;
}
console.log(sum(1,2))
const func = param => param
function func(param) {
    return param;
}*/
/*const multiply5 = (num=1) => num * 5
console.log(multiply5());*/

//const someFunc = ({ name } = {}) => console.log(name)
//const someFunc = ([ name ] = []) => console.log(name)
//someFunc({name : "Bbest" , age:19})

/*function someFunc(...param){
    console.log(param)
}
someFunc(1,2,3,4,5)
someFunc(1,2,3)
someFunc(1,2)*/

/*setTimeout(() => {
    console.log("Hello World")
},1000)

function someFunction(name, callback = () => undefined) {
    if(typeof callback !== "function") return
    const concatenateString = "Hello " + name
    callback(concatenateString)
}*/

/*const someFunc = () => new Promise((resolve, reject) => {
    resolve("aaaaaaaaa")
    reject("bbbbbbbbb")
})
someFunc().then((value) => {
    console.log(value) //aaaaaaaaaaa
}).catch(value => {
    console.log(value) // bbbbbbbbbbb
}).finally(() => {
    console.log("done")
})*/

async function asynceAwait() {
    await queue()
    const value = await order()
    console.log(value)
}

function DonutShop(){
    function _queue(cb){
        console.log("Wait for other customer")
        setTimeout(function(){
            console.log("It's your queue")
            cb()
        },1000)
    }
}