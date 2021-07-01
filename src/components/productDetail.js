import React, { useState } from "react"
import SwiperCore, { Pagination } from "swiper"
import { Swiper, SwiperSlide } from "swiper/react"
import { css } from "@emotion/core"
import { useAddItemToCart } from "gatsby-theme-shopify-manager"
import { useWindowUpdate } from "./WindowContext"

// Import Swiper styles
import "swiper/swiper-bundle.min.css"

SwiperCore.use([Pagination])

export default function ProductDetail(props) {
  const [variant, setVariant] = useState(props.product.variants[0])
  const setActiveWindow = useWindowUpdate()
  const addItemToCart = useAddItemToCart()
  const selects = props.product.options.map(o => {
    return (
      <div className="border border-black rounded mb-4">
        { o.values.map(v => (
          <button className="px-4 uppercase">{v}</button>
        )) }
      </div>
    )
  })

  async function addToCart() {
    const variantId = variant.shopifyId
    const quantity = 1

    try {
      await addItemToCart(variantId, quantity)
      setActiveWindow("cart")
    } catch {
      alert("There was a problem adding that item to your cart.")
    }
  }

  return (
    <div class="gap-3 grid-cols-2 md:grid"> 
      <div class="col-start-2 md:flex md:flex-col md:justify-end">
        <h2 className="text-lg font-normal mb-0">{props.product.title}</h2>
        <p>${variant.price}</p>
      </div>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        zoom
        className="row-span-2 row-start-1"
        css={css`
          width: 500px;
          max-width: 90%;
          .swiper-pagination-bullet-active {
            background-color: black;
          }
        `}
      >
        {props.product.images.map((i, ind) => {
            return (
              <SwiperSlide>
                <img
                  src={i.originalSrc}
                  className="w-full mx-auto mb-8"
                  alt=""
                />
              </SwiperSlide>
            )
        })}
      </Swiper>
      <div className="flex flex-col items-center">
        {selects}
        <button
          className="border border-black rounded block mx-auto px-2 mb-4 uppercase text-xs font-semibold"
          onClick={addToCart}
        >
          Add to Cart
        </button>
        <div dangerouslySetInnerHTML={{__html: props.product.descriptionHtml}}/>
      </div>
    </div>
  )
}

