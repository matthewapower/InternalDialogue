import React from "react"
import Panel from "./panel"
import logo from "../images/id-logo.svg"
import { css } from "@emotion/core"
import { Link, useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import {
  useCart,
  useCartItems,
  useRemoveItemFromCart,
  useCheckoutUrl,
} from "gatsby-theme-shopify-manager"

export default function Cart() {
  const {
    allShopifyProductVariant: { nodes: variants },
    allShopifyProduct: { nodes: products },
  } = useStaticQuery(graphql`
    query {
      allShopifyProductVariant {
        nodes {
          shopifyId
          image {
            localFile {
              childImageSharp {
                fixed(width: 75) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
      allShopifyProduct {
        nodes {
          handle
          variants {
            shopifyId
          }
        }
      }
    }
  `)
  const lineItems = useCartItems()
  const cart = useCart()
  const removeFromCart = useRemoveItemFromCart()
  const checkout = useCheckoutUrl()

  const betterProductHandles = products.map(({ handle, variants }) => {
    const newVariants = variants.map(variant => variant.shopifyId)
    return {
      variants: newVariants,
      handle,
    }
  })

  function getHandleForVariant(variantId) {
    const selectedProduct = betterProductHandles.find(product => {
      return product.variants.includes(variantId)
    })

    return selectedProduct ? selectedProduct.handle : null
  }

  function getImageFixedForVariant(variantId) {
    const selectedVariant = variants.find(variant => {
      return variant.shopifyId === variantId
    })

    if (selectedVariant) {
      return selectedVariant.image.localFile.childImageSharp.fixed
    }
    return null
  }

  const LineItem = ({ item }) => (
    <div className="grid grid-cols-3 gap-4 text-left mb-6">
      <Img fixed={getImageFixedForVariant(item.variant.id)} />
      <div className="col-span-2">
        <p className="mb-0 text-sm uppercase">{item.title}</p>
        <ul className="m-0 mb-4">
          {item.variant.selectedOptions.map(({ name, value }) => (
            <li key={name} className="mb-0 text-xs">
              {name}: {value}
            </li>
          ))}
          <li
            key="quantity"
            className="text-xs mb-0 self-center flex justify-between"
          >
            <span>Quantity: {item.quantity}</span>
            {/* <div className="border border-black rounded">
              <button className="px-2">-</button>
              <button className="px-2">+</button>
            </div> */}
          </li>
        </ul>
        <div className="flex justify-between">
          <span className="font-heading text-xs mb-0 self-center">
            ${Number(item.variant.priceV2.amount).toFixed(2)}
          </span>
          <button
            variant="link"
            className="text-xs px-4 uppercase border border-black self-center rounded inline-block hover:opacity-50"
            onClick={() => removeFromCart(item.variant.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  )

  const emptyCart = (
    <div className="flex flex-col items-center">
      <h1 className="text-center mx-auto text-lg uppercase font-normal">
        Cart
      </h1>
      <p className="text-center mb-12 mx-4">Your shopping cart is empty.</p>
    </div>
  )

  return lineItems.length < 1 ? (
    emptyCart
  ) : (
    <div>
      <h1 className="text-center mx-auto text-lg uppercase font-normal">
        Cart
      </h1>
      <div className="mb-4">
        <div
          className="max-w-screen-lg mx-auto mb-4 overflow-y-scroll px-4"
          style={{ maxHeight: "400px" }}
        >
          {lineItems.map(item => (
            <React.Fragment key={item.id}>
              <LineItem key={item.id} item={item} />
            </React.Fragment>
          ))}
        </div>
        <div className="flex flex-col max-w-screen-lg mx-auto items-center justify-between w-full">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <span>Subtotal:</span>
            <span>${cart.subtotalPrice}</span>
          </div>
          <a
            className="border border-black px-4 py-2 rounded hover:opacity-50"
            href={checkout}
            target="_blank"
            rel="noopener noreferrer"
          >
            Complete My Order
          </a>
        </div>
      </div>
    </div>
  )
}
