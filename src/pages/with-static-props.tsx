import { useEffect } from "react"
import ApiService from "../api.service"
import withFunctional from "../hocs/withFunctional"

const StaticPropsPage = (props) => {
  useEffect(() => {
    console.log(props)
  }, [])

  return (<>
    <h1>Number : { props.num }</h1>
    <p>This is a staticProps Example Page</p>
  </>)
}

export const getStaticProps = async () => {
  const posts = await ApiService.getAllPosts()

  return {
    props: {
      posts,
      hello: "helo world",
      num: ( Math.random() * 1000 )
    },
    revalidate: 10
  }
}

export default withFunctional(StaticPropsPage)