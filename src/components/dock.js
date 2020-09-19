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
      <video
        className="rounded-full w-16 mb-0"
        loop
        playsinline="true"
        autoplay="true"
        muted
        preload="auto"
        src="https://res.cloudinary.com/ds9ng4srx/video/upload/v1600546556/Farrah/orb-layered-crop_wdenhf.mp4"
      />
    </animated.div>
  )
}
