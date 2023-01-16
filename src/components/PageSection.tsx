import { Flex } from "@aws-amplify/ui-react"
import Typography from "@mui/material/Typography"
import ItemCard, { ItemCardProps } from "./ItemCard"

export default function PageSection<T>(
  props: {
    title?: string
    items?: T[]
  } & Omit<ItemCardProps<T>, "item">
) {
  const { title, items, ...itemCardProps } = props

  return (
    <Flex direction="column">
      <Typography>{title}</Typography>
      {items &&
        items.map((item) => <ItemCard item={item} {...itemCardProps} />)}
    </Flex>
  )
}
