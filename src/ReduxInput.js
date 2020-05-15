import { toPath as toLodashPath } from 'lodash'
import { path, assocPath, always } from 'ramda'
import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Context, ReduxInputContext } from './ReduxInputContext'

/**
 * ReduxInput connects any standard input component to the redux store where a
 * "standard input component" is any component accepting e.g. value and onChange props.
 *
 * @param {function} Component - the component to connect to the store.
 * @param {function} selector - selects state containing the input value to be acted on from the redux store.
 * @param {function} action - the action to dispatch whenever the underlying onChange is fired.
 * @param {string|array} actOn - sub-path of the selected state to read/write the input value to.
 * @param {function} parse - a transformator to transform raw onChange value to store value.
 * @param {function} format - a transformator to transform store value to raw input value.
 * @param {object} props - props to be explicitly passed to the underlying Component
 */
const ReduxInput = ({
  Component,
  selector,
  action,
  actOn,
  parse,
  format,
  valueProp = 'value',
  props,
  ...rest
}) => {
  const dispatch = useDispatch()
  const { contextSelector, contextAction } = useContext(Context) || {}
  const state = useSelector(selector || contextSelector || fallbackSelector)
  const value = actOn ? path(toPath(actOn), state) : state
  const formattedValue = typeof format === 'function' ? format(value) : value
  const callback = (onChangeValue) => {
    const eventValue = (onChangeValue?.target || {})[valueProp]
    const nextValue = eventValue === undefined ? onChangeValue : eventValue
    const parsedValue =
      typeof parse === 'function' ? parse(nextValue) : nextValue
    const finalPayload = actOn
      ? assocPath(toPath(actOn), parsedValue, state)
      : parsedValue
    if (typeof action === 'function' || contextAction) {
      dispatch((action || contextAction)(finalPayload))
    }
  }
  return (
    <Component
      {...{ [valueProp]: formattedValue }}
      onChange={callback}
      {...props}
      {...rest}
    />
  )
}

const fallbackSelector = always({})

const toPath = (path) =>
  toLodashPath(path).map((step) =>
    step === String(Number(step)) ? Number(step) : step
  )

export { ReduxInputContext, ReduxInput }
