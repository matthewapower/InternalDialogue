import React from "react"
import { css } from "@emotion/core"
import tw from "tailwind.macro"

const WindowButton = props => (
  <button
    css={css`
      ${tw`bg-black h-4 w-4 rounded-full my-2 ml-3 relative`}
      border: 1px solid ${props.dark};
      background: ${`linear-gradient(${props.dark}, ${props.dark}, ${
        props.light
      })`};
      box-shadow: #868475 0 1px 4px;

      &:after {
        content: "";
        ${tw`inset-0 absolute rounded-full m-px`}
        background: linear-gradient(white, transparent, transparent, transparent);
      }
    `}
  />
)

export default WindowButton
