import {
  applyTo,
  converge,
  equals,
  identity,
  ifElse,
  pipe,
  prop,
  propOr,
} from 'ramda'

/**
 *  firstParagraph :: String -> String
 */
const firstParagraph = x => x.split('\n')[0]

/**
 *  removeTags :: String -> String
 */
const removeTags = x => x.slice(3, -4)

/**
 *  trim :: String -> String
 */
const trim = x => x.trim()

/**
 *  finalTrimmed :: String -> String
 */
const finalTrimmed = length => x => x.substring(0, length)

/**
 *  addDots :: String -> String
 */
const addDots = x => x + '\u2026'

/**
 *  getTrimmed :: String -> String
 */
const getTrimmed = pipe(
  prop('content'),
  firstParagraph,
  removeTags,
  trim
)

/**
 *  getTrimmerFunctionWithLength :: {length: Number} -> (String -> String)
 */
const getTrimmerFunctionWithLength = pipe(
  propOr(220, 'length'),
  finalTrimmed
)

/**
 *  areSameTrimmed :: (String, String -> String) -> Boolean
 */
const areSameTrimmed = converge(equals, [identity, applyTo])

/**
 *  returnTrimmedString :: (String, String -> String) -> String
 */
const returnTrimmedString = ifElse(areSameTrimmed, identity, addDots)

/**
 *  getExcerpt :: {content: String, length: Number} -> String
 */
export default converge(returnTrimmedString, [
  getTrimmed,
  getTrimmerFunctionWithLength,
])
