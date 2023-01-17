import { Flex } from "@aws-amplify/ui-react"
import Typography from "@mui/material/Typography"
import ItemAvatar from "../ItemAvatar"
import ItemCard from "../ItemCard"
import ItemPill from "../ItemPill"
import { ItemProps, PageSectionVariant } from "../Types"

export default function PageSection<T>(
  props: {
    variant?: PageSectionVariant
    title?: string
    items: T[]
  } & Omit<ItemProps<T>, "item">
) {
  const { variant, title, items, ...itemProps } = props

  return (
    <Flex direction="column">
      <Typography>{title}</Typography>
      <Flex>
        {items &&
          items.map((item, key) =>
            variant === "pill" ? (
              <ItemPill key={key} item={item} {...itemProps} />
            ) : variant === "avatar" ? (
              <ItemAvatar key={key} item={item} {...itemProps} />
            ) : (
              <ItemCard key={key} item={item} {...itemProps} />
            )
          )}
      </Flex>
    </Flex>
  )
}
