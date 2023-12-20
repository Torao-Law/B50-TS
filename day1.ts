// variable => let, const, var [indetifikasi] = value
// var sayHello = "Good morning" // v1
// console.log(sayHello)

// const myName: string = "Dandi Saputra" // v2
// console.log(myName)

// var isVip;

// isVip = true

// console.log(isVip)

// string, number (integer, float), boolean, array, object, null, undifined
// const isVip: boolean = true

// const myMoney = 0
// console.log(myMoney)

// const gender = undefined
// console.log(gender)

// const block = null
// console.log(block)


// object
// const myProfile = {
//   name: "Rebbecca Eltra",
//   gender: "female",
//   age: 24
// }

// console.log(myProfile)

// // type
// type vehicle = {
//   type: string
//   model: string
//   year: number
// }

// const car: vehicle = {
//   type: "Toyota",
//   model: "Supra",
//   year: 2023
// }

// // interface
// interface posting {
//   content: string
//   image: string
//   likes: number
// }

// const user: posting = {
//   content: "Saya dan kamu",
//   image: "image.png",
//   likes: 23
// }

// console.log(user);
// console.log(car);




// const data: (string | number | boolean)[] = ["Dandi", 10, true]
// const data: Array<string | number | boolean> = ["Dandi", 10, true]
// const data: any[] = ["Name", true]
// console.log(data)


// type vehicle = {
//   type: string
//   model: string
//   year: number
// }

// const car: vehicle[] = [
//   {
//     type: "Toyota",
//     model: "Supra",
//     year: 2023
//   },
//   {
//     type: "Suv",
//     model: "Honda HRV",
//     year: 2024
//   }
// ]

// const car: Array<vehicle> = [
//   {
//     type: "Toyota",
//     model: "Supra",
//     year: 2023
//   },
//   {
//     type: "Suv",
//     model: "Honda HRV",
//     year: 2024
//   }
// ]

// console.log(car)



// condition
// let x: number = 9
// let y: number = 21

// if(x > y) {
//   console.log("x is greater than y")
// } else {
//   console.log("x is less than y")
// }
// const isMember = 10
// const myName = isMember == 10 ? "can access all course" : "cant access"
// console.log(myName)

// function logical(b: boolean) : boolean {
  // const a: boolean = false
  // return !!b
// }

// console.log(logical(true))

// aritmatic => +, -, *, /, %
// comparation => <, >, ==, >=, <=, ===, !=, !==, ?, >==, <==
// logical => &&, ||, !


// const obj1 = {
//   id: 23,
//   name: "dandi",
//   isVip: false
// }

// const obj2 = {
//   id: 1,
//   name: "dandi",
//   userId: 23
// }



// looping
// for(let i = 0; i < 10; i++) {
//   console.log(i)
// }

// const obj1 = {
//   name: "Rebbeca Eltra",
//   gender: "female",
//   isVip: true,
//   no: 2
// }
// Object.keys(obj1).forEach(([key, value], index) => {
//    console.log(key, value, index);
// })

// for(const key in obj1) {
//   console.log(obj1.name)
// }


// const arr1 = [3, 2, 4, 1]
// for(const key of arr1) {
//   console.log(key)
// }


// function
function sayHello() : string {
  return "Pinjam dulu seratus !"
}

// console.log(sayHello())

// function sum(start: number, end: number) : boolean {
//   if(start < end ) return true

//   return false
// }

// console.log(sum(2, 8))
// console.log(sum("2", "8"))

// function overloading
// function add(start: number, end: number) : number;
// function add(start: string, end: string) : string;

// function add(start: any, end: any) : any {
//   return start + end
// }

// console.log(add(2, 8))
// console.log(add("2", "8"))

// function checkUser() : void {
//   console.log("is vip")
// }

// console.log(checkUser())