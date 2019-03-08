import React from 'react'
import {
  cond,
  filter,
  ifElse,
  isNil,
  keys,
  map,
  not,
  pick,
  pipe,
  prop,
  propEq,
  where,
} from 'ramda'

import PaginationLink from './PaginationLink'

/**
 *  getDirectionProps :: Props -> Props
 */
const getDirectionProps = pick(['left', 'right'])

/**
 *  arrify :: Props -> [{direction: String, value: String}]
 */
const arrify = props =>
  keys(props).map(name => ({
    direction: name === 'right' ? `older` : `newer`,
    value: props[name],
  }))

/**
 *  hasNoValue :: [{direction: String, value: String}] -> Boolean
 */
const hasNoValue = pipe(
  prop('value'),
  isNil
)

/**
 *  renderLink :: [{direction: String, value: String}] -> ReactElement
 */
const renderLink = props => <PaginationLink key={props.value} {...props} />

/**
 *  renderNull :: [{direction: String, value: String}] -> ReactElement
 */
const renderNull = () => null

/**
 *  renderElement :: [{direction: String, value: String}] -> ReactElement
 */
const renderElement = map(ifElse(hasNoValue, renderNull, renderLink))

/**
 *  buildLinks :: Props -> ReactElement
 */
export const buildLinks = pipe(
  getDirectionProps,
  arrify,
  renderElement
)

/**
 *  justifyContent :: Props -> String
 */
export const justifyContent = pipe(
  getDirectionProps,
  arrify,
  filter(
    where({
      value: pipe(
        isNil,
        not
      ),
    })
  ),
  cond([
    [propEq('length', 2), () => `space-between`],
    [
      pipe(
        x => (x ? x[0] : {}),
        x => (x ? x : {}),
        propEq(`direction`, `newer`)
      ),
      () => `flex-start`,
    ],
    [() => true, () => `flex-end`],
  ])
)
