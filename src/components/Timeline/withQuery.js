import React from "react"
import { StaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    mobbit: file(relativePath: { eq: "icon-mobbit.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 1000, quality: 85) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Component => () => {
  return (
    <StaticQuery query={query} render={data => <Component data={data} />} />
  )
}
