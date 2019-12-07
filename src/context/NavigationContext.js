import React from 'react'

const navigationContext = React.createContext({})

export const NavigateProvider = navigationContext.Provider
export const NavigateConsumer = navigationContext.Consumer
export default navigationContext