import { shorthands as griffelShorthands } from "@griffel/react"
import tokens from "./tokens"

const shorthands = {
  ...griffelShorthands,
  ...{
    containerWidth(maxWidth: string = tokens.contentWidth) {
      return {
        maxWidth: maxWidth,
        ...shorthands.margin("auto"),
      }
    },
    centeredVertically() {
      return {
        marginTop: "auto",
        marginBottom: "auto",
      }
    },
  },
}

export default shorthands
