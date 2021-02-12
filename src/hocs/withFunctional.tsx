import { Component } from "react";

const withFunctional = PageComponent => props => {
  const msg = "My msg"

  return <PageComponent msg={msg} {...props} />
}

export default withFunctional