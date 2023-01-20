import { Avatar } from "@mui/material"
import { ItemProps } from "./types"

export default function ItemAvatar<T>(props: ItemProps<T>) {
  const { item, renderLabel: renderTitle } = props

  function stringToColor(string: string) {
    let hash = 0
    let i

    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 7) - hash)
    }

    let color = "#"

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff
      color += `00${value.toString(16)}`.slice(-2)
    }

    return color
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name)
      },
      children: name
        ? `${name.split(" ")?.[0]?.[0] ?? "f"}${
            name.split(" ")?.[1]?.[0] ?? ""
          }`
        : "x"
    }
  }

  return (
    <Avatar {...stringAvatar(renderTitle(item))} title={renderTitle(item)} />
  )
}
