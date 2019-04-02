// Creating our context provider and consumer
// provider is what will pass our data
// consumer is what will use our passed data
import { createContext } from 'react'

const NavBarContext = createContext({})

export const NavProvider = NavBarContext.Provider
export const NavConsumer = NavBarContext.Consumer
