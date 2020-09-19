import React, { useRef, useEffect } from "react"
import { useSpring, animated } from "react-spring"
import { useDrag } from "react-use-gesture"
import { css } from "@emotion/core"

export default function Panel({ children, active, setActiveWindow }) {
  const draggingRef = useRef(false)
  const closedPos = 1000
  const [{ y }, set] = useSpring(() => ({ y: active ? 0 : closedPos }))
  let myPos = 0

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

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <animated.div
        {...bind()}
        style={{ y }}
        css={css`
          backdrop-filter: blur(4px);
          -webkit-user-select: none;
        `}
        className="mx-8 max-w-sm bg-gray-200 bg-opacity-75 rounded-lg border border-white select-none"
      >
        <div className="flex items-center justify-center">
          <button className="py-6" onClick={() => close()}>
            <div className="w-12 h-1 bg-gray-500 rounded-full" />
          </button>
        </div>
        <div className="p-5 text-center">{children}</div>
      </animated.div>
    </div>
  )
}
