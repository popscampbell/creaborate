import { Flex } from "@aws-amplify/ui-react"
import Typography from "@mui/material/Typography"
import ItemAvatar from "../renderers/ItemAvatar"
import ItemCard from "../renderers/ItemCard"
import ItemPill from "../renderers/ItemPill"
import { ItemProps } from "../renderers/types"

export enum PageSectionVariant {
  CARD = "card",
  PILL = "pill",
  AVATAR = "avatar"
}

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
            variant === PageSectionVariant.PILL ? (
              <ItemPill key={key} item={item} {...itemProps} />
            ) : variant === PageSectionVariant.AVATAR ? (
              <ItemAvatar key={key} item={item} {...itemProps} />
            ) : (
              <ItemCard key={key} item={item} {...itemProps} />
            )
          )}
      </Flex>
    </Flex>
  )
}
