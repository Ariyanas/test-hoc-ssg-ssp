

const TestContainer = props => (<h3>Hello {props.name}</h3>)

export async function getServerSideProps() {
  return {
    props: {
      name: "Aman Saxena"
    }
  }
}

export default TestContainer