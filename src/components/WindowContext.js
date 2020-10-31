import React, { useState, useContext } from "react"

const WindowContext = React.createContext()
const WindowUpdateContext = React.createContext()

export function useWindow() {
  return useContext(WindowContext)
}

export function useWindowUpdate() {
  return useContext(WindowUpdateContext)
}

export function WindowProvider({ children }) {
  const [windowState, setWindowState] = useState()

  return (
    <WindowContext.Provider value={windowState}>
      <WindowUpdateContext.Provider value={setWindowState}>
        {children}
      </WindowUpdateContext.Provider>
    </WindowContext.Provider>
  )
}
