import React, { useRef, useEffect } from "react"
import { useSpring, animated } from "react-spring"
import { useDrag } from "react-use-gesture"
import { css } from "@emotion/core"
import { useWindow, useWindowUpdate } from "./WindowContext"
import Info from "./info"
import ProductDetail from "./productDetail"
import Cart from "./cart"

export default function Panel({ children }) {
  const active = useWindow()
  const setActiveWindow = useWindowUpdate()
  const draggingRef = useRef(false)
  const closedPos = 1000
  const [{ y }, set] = useSpring(() => ({ y: active ? 0 : closedPos }))
  let myPos = 0
  let child

  const open = () => {
    // when cancel is true, it means that the user passed the upwards threshold
    // so we change the spring config to create a nice wobbly effect
    set({ y: myPos })
  }
  const close = (velocity = 0) => {
    set({ y: closedPos, config: { ...velocity } })
    setActiveWindow(null)
  }

  useEffect(() => {
    active ? set({ y: myPos }) : set({ y: closedPos })
  }, [active])

  // Set the drag hook and define component movement based on gesture data
  const bind = useDrag(
    ({ first, last, vxvy: [, vy], movement: [, my], cancel }) => {
      console.log(my)
      if (last && my > 100) close()
      else if (last && my < 100) open()
      else set({ y: my, immediate: false })
    }
  )

  if (active && active.type === "product") {
    child = <ProductDetail product={active.product} />
  } else if (active === "info") {
    child = <Info />
  } else if (active === "cart") {
    child = <Cart />
  }

  return (
    <animated.div
      className="fixed inset-0 flex items-center justify-center"
      style={{ y }}
    >
      <animated.div
        {...bind()}
        css={css`
          backdrop-filter: blur(4px);
          -webkit-user-select: none;
        `}
        className="mx-2 max-w-sm w-full bg-gray-200 bg-opacity-75 rounded-lg border border-white select-none"
      >
        <div className="flex items-center justify-center">
          <button className="py-6" onClick={() => close()}>
            <div className="w-12 h-1 bg-gray-500 rounded-full" />
          </button>
        </div>
        <div className="p-5 text-center">{child}</div>
      </animated.div>
    </animated.div>
  )
}
