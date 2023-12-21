import React from "react";
import SayHello from "./components/SayHello";

type Blog = {
  title: string
  content: string
}

const App : React.FC = () => {
  const [data, setData] = React.useState<Blog>({
    title: "Bang bagi uang seratus",
    content: "Meminjamkan uang keorang lebih mengerekan dibanding beda nomor pilihan saat pemilu"
  })

  return (
    <>
      <SayHello />
    </>
  )
}

export default App