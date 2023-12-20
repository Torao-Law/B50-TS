// CALLBACK, PROMISE, HOF, ASYNCHRONOUS


// ========================== CALLBACK ===================================
// function checkingVip(name: string, callback: (cb: boolean) => void) : string {
//   return `Hallo my name is ${name}, Iam member ${callback(true)}`
// }

// function vipCondition(isVip: boolean) : string {
//   if(isVip) return "VIP"

//   return "Reguler"
// }

// console.log(checkingVip("Rifal", vipCondition))


// ========================== CALLBACK WITH INTERFACE / TYPES ===================================
// type vip = (cb: boolean) => void

// type check = string

// function checkingVip(name: string, callback: vip) : check {
//   return  `Hallo my name is ${name}, Iam member ${callback(true)}`
// }

// function vipCondition(isVip: boolean) : string {
//   if(isVip) return "VIP"

//   return "Reguler"
// }

// console.log(checkingVip("Rifal", vipCondition)





// ========================== PROMISE ===================================
// const isVip: boolean = false
// const promise1: Promise<string> = new Promise((resolve, reject) => {
//   if(!isVip) resolve("Member isnt VIP")

//   reject("Member is VIP")
// })

// promise1
//   .then((res: string) => console.log(res))
//   .catch((res: string) => console.log(res))


// ========================== PROMISE ALL ===================================
// interface Member {
//   name: string
//   isVip: boolean
// }

// type Product = {
//   name: string,
//   price: number
// }

// const isVip: boolean = false
// const member: Promise<Member[]> = new Promise((resolve, reject) => {
//     if(!isVip) resolve([
//       {
//         name: "Rifal",
//         isVip: true
//       },
//       {
//         name: "Rayhanul",
//         isVip: true
//       },
//     ])

//     reject("Error while checking vip")
// })

// const product: Promise<Product[]> = new Promise((resolve, reject) => {
//   if(!isVip) resolve([
//     {
//       name: "Coffe Beans",
//       price: 1500000
//     },
//     {
//       name: "Island",
//       price: 2000000
//     },
//   ])

//   reject("Error while running product")
// })

// member
//   .then((res: Member[]) => console.log(res))
//   .catch((res: string) => console.log(res))
// product
//   .then((res: Product[]) => console.log(res))
//   .catch((res: string) => console.log(res))

// using keyword Promise.all to run all promises
// Promise.all([member, product])
//   .then(res => console.log(res))
//   .catch(res => console.log(res))




// ========================== HOF ===================================
// foreach, map, filter, reduce, find, sort, push and pop, shift and unshift, concat, some and every
// const data: number[] = [1, 2, 3, 4, 5]

// foreach => iterasi data array
// data.forEach((item: number) => console.log(item))

// map => iterasi data array menduplikat array baru
// data.map((item: number, index: number) => console.log(`Duplicate value from index = ${index}, value ${item * 2}`))

// filter => create a new array by conditonal
// const family: number[] = data.filter(item => item <= 3 )
// const family: number[] = data.filter((item: number) => {
//   return item <= 3
// })
// console.log(family);


// reduce => menggabungkan seluruh element array
// const sum: number = data.reduce((prev: number, current: number) => prev + current, 0)
// console.log(sum)

// interface Person {
//   name: string
//   age: number
// }

// const people: Person[] = [
//   {
//     name: "Rebecca Eltra",
//     age: 35
//   },
//   {
//     name: "Megawati",
//     age: 24
//   }
// ]

// const sum: string = people.reduce((accumulator, currentValue) => accumulator + ", " + currentValue.name, 'Ganja-r')

// console.log(sum)

// find => menemukan data sesuai kondisi element pertama
// interface Person {
//   name: string
//   age: number
// }

// const people: Person[] = [
//   {
//     name: "Rebecca Eltra",
//     age: 35
//   },
//   {
//     name: "Megawati",
//     age: 24
//   },
//   {
//     name: "Mario",
//     age: 35
//   }
// ]

// const some: Person | undefined = people.find((person: Person) => person.age > 25)

// if(some) {
//   console.log(`Dia adalah ${some.name}`)
// } else {
//   console.log("not found")
// }



// ========================== ASYNCHRONOUS ===================================
async function FetchAPI() {
  try {
    const res: Response = await fetch("https://api.dazelpro.com/mobile-legends/hero")

    console.log(await res.json())
  } catch (error) {
    throw error
  }
}

FetchAPI()