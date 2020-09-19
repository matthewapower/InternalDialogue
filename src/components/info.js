import React from "react"
import Panel from "./panel"
import logo from "../images/id-logo.svg"
import { css } from "@emotion/core"

export default function Info({ activeWindow, setActiveWindow }) {
  return (
    <Panel active={activeWindow === "info"} setActiveWindow={setActiveWindow}>
      <img
        src={logo}
        css={css`
          filter: drop-shadow(0 0.2rem 0.2rem #999999);
        `}
        className="mx-auto"
        alt="Internal Dialogue"
      />
      <p className="font-bold text-gray-700 text-sm">Version 1.0</p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
        eligendi numquam accusamus voluptate nam maxime eaque error aperiam
        molestiae minus quisquam impedit sapiente quia, eos, neque ratione
        pariatur harum delectus.
      </p>
      <p className="font-bold text-gray-700 text-xs transform translate-y-4">
        Internal Dialogue © 2020 – ????
      </p>
    </Panel>
  )
}
