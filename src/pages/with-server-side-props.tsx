import { useEffect, useState } from "react"
import ApiService from "../api.service"

import withFunctional from "../hocs/withFunctional"

const ServerSidePropsPage = (props) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(props)
  }, [])

  const handleClick = () => {
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
    setCount(count + 1)
  }

  return (<>
    <h1>Title</h1>
    <p>This is a serverSideProps Example Page</p>
    <button onClick={handleClick}>Count : {count}</button>
  </>)
}

export async function getServerSideProps() {
  const posts = await ApiService.getAllPosts()

  console.log(posts)

  return {
    props: {
      posts
    }
  }
}

export default withFunctional(ServerSidePropsPage)