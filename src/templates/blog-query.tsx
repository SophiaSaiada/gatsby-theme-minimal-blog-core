import { graphql } from "gatsby"
import BlogComponent from "../components/blog"

export default BlogComponent

export const query = graphql`
  query {
    allPost(sort: { fields: date, order: DESC }) {
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
