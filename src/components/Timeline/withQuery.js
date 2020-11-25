import React from "react"
import { StaticQuery, graphql } from "gatsby"

const query = graphql`
  query {
    mobbit: file(relativePath: { eq: "icon-mobbit.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    muzzley: file(relativePath: { eq: "muzzley-icon.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    buu: file(relativePath: { eq: "buu.jpg" }) {
      image: childImageSharp {
        fluid(maxWidth: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    coupzon: file(relativePath: { eq: "coupzon.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    oncostats: file(relativePath: { eq: "oncostats.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    aurora: file(relativePath: { eq: "aurora.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 100, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }

    ipvc: file(relativePath: { eq: "ipvc.png" }) {
      image: childImageSharp {
        fluid(maxWidth: 100, quality: 100) {
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
