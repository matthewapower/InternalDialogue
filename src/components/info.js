import React from "react"
import Panel from "./panel"
import logo from "../images/id-logo.svg"

export default function Info({ activeWindow, setActiveWindow }) {
  return (
    <Panel active={activeWindow === "info"} setActiveWindow={setActiveWindow}>
      <img src={logo} className="mx-auto" alt="Internal Dialogue" />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
        eligendi numquam accusamus voluptate nam maxime eaque error aperiam
        molestiae minus quisquam impedit sapiente quia, eos, neque ratione
        pariatur harum delectus.
      </p>
    </Panel>
  )
}
