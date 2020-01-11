import { graphql } from "gatsby"
import HomepageComponent from "../components/homepage"

export default HomepageComponent

export const query = graphql`
  query {
    allPost(sort: { fields: date, order: DESC }, limit: 15, filter: {showAtHome: {eq: true}}}) {
      nodes {
        slug
        title
        date(formatString: "DD.MM.YYYY")
        banner {
          childImageSharp {
            fluid(maxWidth: 480, maxHeight: 270) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        tags {
          name
          slug
        }
        lang
      }
    }
  }
`
