import React, { useState } from "react"
import { useTransition, animated } from "react-spring"
import ProductGrid from "../components/productGrid"
import logo from "../images/id-logo.svg"

const NewUI = () => {
	const [collection, setCollection] = useState(false)
	const transitions = useTransition(collection, {
		from: { x: 1 },
		enter: { x: 1 },
		leave: { x: 0 },
	})
	return (
    <div className="fixed inset-0 flex items-center justify-center flex-col">
      <img src={logo} alt="" className="mx-auto fixed top-0 mt-16" />
      {transitions(({ x }, item) =>
        item ? (
          <animated.main
            style={{ opacity: x.to( {output: [0, 1] }) }}
          >
            <ProductGrid />
          </animated.main>
        ) : (
          <animated.button
            style={{
              transform: x.to({ output: [500, 1] }).to(x => `scale(${x})`),
              opacity: x.to({ output: [0, 1] }),
            }}
            className="bg-gray-400 p-1 rounded-md shadow-lg relative"
            onClick={() => setCollection(!collection)}
          >
            <animated.video
              className="rounded-full w-12 mb-0 shadow-lg"
              loop
              playsinline="true"
              autoplay="true"
              muted
              preload="auto"
              src="https://res.cloudinary.com/ds9ng4srx/video/upload/v1600546556/Farrah/orb-layered-crop_wdenhf.mp4"
              style={{ opacity: x.to({ range: [0, 0.5], output: [0, 1] }) }}
            />
            <span className="bg-red-500 text-white h-6 w-6 block absolute top-0 right-0 rounded-full transform translate-x-2 -translate-y-2 shadow-md">
              1
            </span>
          </animated.button>
        )
      )}
			<a href="#" className="fixed bottom-0 mx-auto mb-16">Info</a>
    </div>
  )
}
export default NewUI
