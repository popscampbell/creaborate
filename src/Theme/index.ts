import { makeStyles, mergeClasses } from "@griffel/react"
import theme from "./theme"
import tokens from "./tokens"
import shorthands from "./shorthands"

export type BackgroundColor =
  | "light"
  | "lighter"
  | "main"
  | "dark"
  | "darker"

export default theme
export { makeStyles, mergeClasses, shorthands, tokens }
