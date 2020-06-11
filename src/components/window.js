import React from "react"
import { css } from "@emotion/core"
import tw from "tailwind.macro"
import WindowButton from "./windowButton"

const Window = props => (
  <div
    css={css`
      ${tw`max-w-screen-md w-auto relative shadow-md bg-white mx-auto pt-8`}
      border: 2px solid #DFDFDF;
      border-radius: 10px 10px 4px 4px;
    `}
  >
    <div
      css={css`
        ${tw`inset-x-0 top-0 h-8 absolute`}
        background: linear-gradient(#EDF1F4, #DFDFDF);
        border-radius: 8px 8px 0 0;
        border-bottom: 1px solid #a8abb0;
      `}
    >
      <WindowButton dark="#ed3550" light="#f3aeb5" />
      <WindowButton dark="#E5BB33" light="#e0cd90" />
      <WindowButton dark="#6cbc39" light="#a9cc92" />
      <span
        css={css`
          ${tw`font-sans font-medium absolute text-sm`}
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        `}
      >
        {props.title}
      </span>
    </div>
    {props.children}
  </div>
)

export default Window
