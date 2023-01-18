import { Chip } from "@mui/material"
import { ItemProps } from "./types"

export default function ItemPill<T>(props: ItemProps<T>) {
  const { item, renderLabel: renderTitle } = props
  return <Chip label={renderTitle(item)} />
}
