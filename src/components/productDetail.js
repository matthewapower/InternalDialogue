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
    <div> 
      <h2 className="text-lg font-normal mb-0">{props.product.title}</h2>
      <p>${variant.price}</p>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        zoom
        css={css`
          width: 300px;
          max-width: 90%;

          .swiper-pagination-bullet-active {
            background-color: black;
          }
        `}
      >
        <SwiperSlide>
          <img
            src={props.product.images[0].originalSrc}
            className="w-2/3 mx-auto mb-8"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="bg-white rounded mb-4"
            css={css`
              padding-bottom: 80%;
              position: relative;

              .wrapper {
                position: absolute;
                top: 50%;
                left: 50%;
                width: 80%;
                transform: translate(-50%, -50%);
              }
            `}
          >
            <div
              className="wrapper"
              dangerouslySetInnerHTML={{
                __html: props.product.descriptionHtml,
              }}
            />
          </div>
        </SwiperSlide>
        {props.product.images.map((i, ind) => {
          if (ind !== 0) {
            return (
              <SwiperSlide>
                <img
                  src={i.originalSrc}
                  className="w-2/3 mx-auto mb-8"
                  alt=""
                />
              </SwiperSlide>
            )
          }
        })}
      </Swiper>
      <div className="border border-black rounded inline-block mb-4">
        {props.product.variants.map(v => {
          return (
            <button
              className={`px-2${
                variant.id === v.id ? " bg-black text-white" : ""
              }`}
              onClick={() => setVariant(v)}
            >
              {v.title}
            </button>
          )
        })}
      </div>
      <button
        className="border border-black rounded block mx-auto px-2 mb-4 uppercase text-xs font-semibold"
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  )
}
