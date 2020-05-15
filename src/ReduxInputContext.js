import React from 'react'

const Context = React.createContext()

const ReduxInputContext = ({
  selector,
  action,
  children,
  Component = React.Fragment,
  ...props
}) => (
  <Component {...props}>
    <Context.Provider
      value={{ contextSelector: selector, contextAction: action }}
    >
      {children}
    </Context.Provider>
  </Component>
)

export { ReduxInputContext, Context }
