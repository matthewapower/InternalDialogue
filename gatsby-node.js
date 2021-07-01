const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const productTemplate = path.resolve(`./src/templates/product.js`)
  const result = await graphql(
    `
      {
        allShopifyProduct {
          nodes {
            handle
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const products = result.data.allShopifyProduct.nodes

  products.forEach((product, index) => {
    createPage({
      path: `/products/${product.handle}`,
      component: productTemplate,
      context: {
        handle: product.handle,
      },
    })
  })
}
