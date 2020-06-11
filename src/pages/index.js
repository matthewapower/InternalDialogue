import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Window from "../components/window"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-center font-serif font-normal">Internal Dialogue</h1>
    {data.allArenaBlock.nodes.map((node, i) => {
      if (node.image.childImageSharp)
        return (
          <div className="mb-24 flex">
            <Window title={node.title}>
              <img
                className="mb-0"
                src={node.image.childImageSharp.fluid.src}
                alt={node.title}
              />
            </Window>
          </div>
        )
    })}
  </Layout>
)

export const query = graphql`
  query HomePageQuery {
    allArenaBlock {
      nodes {
        title
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

export default IndexPage
