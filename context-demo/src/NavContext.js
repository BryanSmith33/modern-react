import React from 'react'

const NavBarContext = React.createContext({})

export const NavProvider = NavBarContext.Provider
export const NavConsumer = NavBarContext.Consumer
