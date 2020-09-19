import React from "react"
import { useSpring, animated } from "react-spring"

export default function Dock({ activeWindow, setActiveWindow }) {
  const { x } = useSpring({
    from: {
      x: 0,
    },
    x: activeWindow ? 0 : 1,
  })

  return (
    <animated.div
      style={{
        transform: x
          .interpolate({
            range: [0, 1],
            output: [150, 0],
          })
          .interpolate(x => `translateY(${x}%)`),
      }}
      className="fixed bottom-0 grid grid-flow-col gap-4 bg-gray-200 bg-opacity-75 p-5 mb-3 rounded-lg border border-white shadow"
      onClick={() => setActiveWindow("info")}
    >
      <img
        className="rounded-full w-16 mb-0"
        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
        alt=""
      />
      <img
        className="rounded-full w-16 mb-0"
        src="https://pbs.twimg.com/profile_images/1276461929934942210/cqNhNk6v_400x400.jpg"
        alt=""
      />
    </animated.div>
  )
}
