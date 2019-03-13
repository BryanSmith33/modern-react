import React, {createContext} from 'react'

const NavBarContext = createContext({})

export const NavProvider = NavBarContext.Provider
export const NavConsumer = NavBarContext.Consumer
