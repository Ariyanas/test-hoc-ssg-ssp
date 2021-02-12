import { useEffect } from "react"
import ApiService from "../api.service"

import withTest from "../hocs/withTest"

const ServerSidePropsPage = (props) => {
  useEffect(() => {
    console.log(props)
  }, [])

  return (<>
    <h1>Title</h1>
    <p>This is a serverSideProps Example Page</p>
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

export default withTest(ServerSidePropsPage)