import { useEffect } from "react"
import ApiService from "../api.service"

const BothPropsPage = (props) => {
  useEffect(() => {
    console.log(props)
  }, [])

  return (<>
    <h1>Title</h1>
    <p>This is a staticProps Example Page</p>
  </>)
}

export const getStaticProps = async () => {
  const meta = {
    title: "Both ServerSide and StaticProps",
    random: (Math.random() * 1000)
  }

  return {
    props: {
      meta
    }
  }
}

export const getServerSideProps = async () => {
  const posts = await ApiService.getAllPosts()

  return {
    props: {
      posts
    }
  }
}

export default BothPropsPage