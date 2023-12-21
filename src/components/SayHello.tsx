// import React from "react"

// example component with embed expression
// const SayHello: React.FC = () => {
//   const myName: string = "Megawati"

//   function title() : string {
//     return `Fullstack Dev`
//   }

//   return (
//     <p>Good Afternoon {myName},, {title()}</p>
//   )
// }

// export default SayHello





// Event 
// const SayHello: React.FC = () => {
//   const Greeting: React.MouseEventHandler<HTMLButtonElement> = () => {
//     alert("Good morning everyone, have a nice day !")
//   }

//   return (
//     <>
//       <p>Click Here !</p>
//       <button onClick={Greeting}>Greeting</button>

//       <p>Click Here v2 !</p>
//       <button onClick={() => alert("Pinjam dulu seratus !")}>Greeting</button>
//     </>
//   )
// }

// export default SayHello




// State
// import React from "react"

// const SayHello: React.FC = () => {
//   const [count, setCount] = React.useState<number>(0)

//   const add = () : void => {
//     setCount(count + 1)
//   }

//   return (
//     <>
//       <p>Please change the number !</p>
//       <p>{count}</p>

//       <button onClick={add}>Add</button>
//       <button onClick={() => setCount(count - 1)}>Less</button>
//     </>
//   )
// }

// export default SayHello







// props
// import React from "react"

// type Blog = {
//   title: string
//   content: string
// }

// const SayHello: React.FC<Blog> = (props) => {
//   console.log(props)

//   return (
//     <>
//       <p>Data by props !</p>
//       <p>{props.title}</p>
//       <p>{props.content}</p>
//     </>
//   )
// }

// export default SayHello


// conditional rendering
import React from "react"

type Private = {
  logout: () => void
}

const PrivatePage: React.FC<Private> = ({ logout }) => {
  return (
    <>
      <h1>Welcome bang</h1>
      <button onClick={logout}>Logout</button>
    </>
  )
}


type Login = {
  login: () => void
}

const GuestPage: React.FC<Login> = ({ login }) => {
  return (
    <>
      <h1>Please sign</h1>
      <button onClick={login}>Login</button>
    </>
  )
}


const SayHello: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false)

  return (
    <>
      { isLoggedIn ? (
        <PrivatePage logout={() => setIsLoggedIn(!isLoggedIn)} />
      ) : (
        <GuestPage login={() => setIsLoggedIn(!isLoggedIn)} />
      )
      }
    </>
  )
}

export default SayHello


// styling react,
// consume API. (https://www.emsifa.com/api-wilayah-indonesia/) => Provinsi, Kabupaten, Kecamatan (Tag Input selanjutnya muncul setelah tag input saat ini ada nilainya)
// useEffect (mounting, update, unmounting)