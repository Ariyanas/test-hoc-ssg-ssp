import { Component } from "react"

const withTest = (PageComponent: any) => {
  // console.log(WrappedComponent)
  return class WithTestComponent extends Component {
    constructor(props) {
      super(props)     
      // console.log(pageProps)
    }
    // static async getInitialProps(ctx: any) {
    //   let pr = {}

    //   console.log("hello")
    //   if (WrappedComponent.getServerSideProps) {
    //     const d = await WrappedComponent.getServerSideProps()

    //     pr = {
    //       ...pr,
    //       ...d
    //     }
    //   }

    //   if (WrappedComponent.getStaticProps) {
    //     const d = await WrappedComponent.getStaticProps()

    //     pr = {
    //       ...pr,
    //       ...d
    //     }
    //   }

    //   return { ...pr }
    // }

    render() {
      return <PageComponent name={"Aman"} {...this.props} {...this.state} />
    }
  }
}

export default withTest