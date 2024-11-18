// let c=3
// console.log(c);
// c=5
// console.log(c);
// c="porsche"
// console.log(c);

const NickName = "Porsche";
const lastName = "Pingfong";
// console.log(firstName[0])

const fullName = NickName + " " + lastName;
// console.log(fullName)

const concateWithGrave = `Your NickName is ${NickName} Your LastName is ${lastName}`;
//console.log(concateWithGrave)

const upperCase = NickName.toUpperCase();
//console.log(upperCase)
const lowerCase = lastName.toLowerCase();
//console.log(lowerCase)

const withSpace = " Porsche ";
//console.log(withSpace)
const noSpace = withSpace.trim();
//console.log(noSpace)

const token = "Bearer=Posche";
const user = "Ton,Bing,Heng,Ter";
// console.log(token)
const splitWord = token.split("=");
const splitName = user.split(",");
// console.log(splitWord[1])
// console.log(splitName)

const numA = 10;
const numB = 20;

// console.log(numA + numB)
// console.log(numA - numB)
// console.log(numA * numB)
// console.log(numA / numB)
// console.log(numA % numB)
// console.log(numA ** numB) //ยกกำลัง

const floatA = 1.1234;
const ceil = Math.ceil(floatA);
const floor = Math.floor(floatA);
// console.log(`ceil is ${ceil} floor is ${floor}`)

const t = true;
const f = false;
const score = 0;
const undef = undefined;
const nu = null;
// if(score){
//     console.log("true")
// }else{
//     console.log("falsy")
// }

// const arr = [1,2,3,4,5,6]
// console.log(arr[1])
// console.log(arr.length)

// const nameArr = []
// console.log(nameArr,":original")
// nameArr.push("Newton") //เพิ่มต่อท้าย
// console.log(nameArr,":After Push")
// nameArr.pop()//เอาตัวท้ายออก
// console.log(nameArr,":After Pop")
// nameArr.push("Newton")
// nameArr.unshift("Ter") //เพิ่มข้างหน้า
// console.log(nameArr,":After Unshift")
// nameArr.shift()//เอาตัวหน้าออก
// console.log(nameArr,":After shift")

const userObj = {
  user: "Username 1",
  password: "password1",
};

// console.log(userObj.user)
// console.log(userObj.password)
// userObj.email = "test01@gmail.com"
// console.log(userObj)
// console.log(userObj.email)
// console.log(userObj["user"])

const theme = {
  day: "",
  night: "#000",
};

const statusTheme = "night";
const setTheme = theme[statusTheme];
// console.log(setTheme)

// primitive value & non primitive value

//primitive = number,boolean
//non primitive = string,array,obj

//pass by value
// const x = 10
// let y = 5

// y=x
// y=y+10
// console.log(y ,": y")
// console.log(x ,": x")
//pass by refference
let user1 = {
  name: "user1",
  age: 20,
};
let user2 = {
  name: "user2",
  age: 22,
};
const { name } = user2
// console.log(user2.name)
// console.log(name ,": from es6")
//worst case
// user2 = user1
// console.log(user2,": user2")
// user2.name = "user2Fr"
// console.log(user2,": user2")
// console.log(user1,": user1")

user2 = { ...user1 };
user2.name = "User2Fr";
// console.log(user2,": user2")
// console.log(user1,": user1")

////////////////////////////////////////////////////////

//function
function sumNumber(x, y) {
  return x + y;
}

const sum = sumNumber(5, 6);
const sum2 = sumNumber;
const xe = sum2(1, 2);
//console.log(xe,": form sum2 function")

const sumByArrowFunc = (x, y) => {
  return x + y;
};
const sumArrowFunc = (x, y) => x + y;

// console.log(sumNumber(1,2),": sum from normal func")
// console.log(sumArrowFunc(1,2),": sum from arrow func")
// console.log(sumByArrowFunc(1,2),": sum from arrow func")

//callback fn

// function callBackContainer() {
//   callBack();
//   console.log("callback container logic");
// }
// function callBack() {
//   console.log("callback container");
// }
// console.log(callBackContainer());

/////////////////////////////////////////////////

// if-else switchcase
const money = 2;
const national = "TH";
const age = 16;
// if (money > 5  || national == "TH") {
//   console.log("money morethan 5");
// } else if (money <= 2) {
//   console.log("money almost 2");
// } else {
//   console.log("money lessthan 5");
// }
if (age === "15") {
  //console.log("Adult")
}

const role = age > 15 ? "adult" : "kid";
// console.log(role)

// switch(4){
//     case 1:
//         console.log("Hello one")
//         break
//     case 2:
//         console.log("Hello two")
//         break
//     case 3:
//         console.log("Hello three")
//         break
//     default:
//         console.log("Not one or two or three")
// }

// const objSwitch = {
//   1: "Hello One",
//   2: "Hello two",
// };

// console.log(objSwitch["1"]);
// objSwitch["3"] = "Hello three";
// console.log(objSwitch["3"]);
// console.log(objSwitch["4" ?? "not in case"]); //error handle

////////////////////////////////////////////////////////////////////

//loop

// for(let i=0;i<5;i++){
//     console.log(`this is ${i} round`)
// }

// let round = 0
// while(round < 5){
//     console.log(`this is ${round} round`)
//     round++
// }

const nums = [1, 2, 3, 4, 5];

// nums.forEach((value,index)=>{
//     console.log("In Foreach Loop "+ value + " index " + index)
// });

// nums.map((value,index)=>{
//     console.log("In Foreach Loop "+ value + " index " + index)
// });

// const noThree = nums.filter((value)=>value >= 3)
// console.log(noThree)

const fnA = ()=>{}
const fnB = ()=>{}

//const ps = new Promise(fnA().then(fnB()))

// async function testAsync(){
//     await console.log("Hello")
//     console.log("Word")
// }
// testAsync()

const axios = require("axios")


async function FetchApi(name){
    try{
        console.log("Loading............")
        const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        console.log(data.data)
    }catch(error){
        console.log("error")
    }finally{
        console.log("finsh loading!")
    }
}
// FetchApi("pikachu")