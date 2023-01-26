import { Flex } from "@aws-amplify/ui-react"
import Button from "@mui/material/Button"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import React from "react"
import ItemAvatar from "../renderers/ItemAvatar"
import ItemCard from "../renderers/ItemCard"
import ItemPill from "../renderers/ItemPill"
import { ItemProps } from "../renderers/types"
import ActionButton from "./ActionButton"
import { ActionButtonProps } from "./types"

export enum PageSectionVariant {
  CARD = "card",
  PILL = "pill",
  AVATAR = "avatar"
}

export default function PageSection<T>(
  props: {
    items: T[]
    variant?: PageSectionVariant
    title?: string
    actions?: ActionButtonProps[]
  } & Omit<ItemProps<T>, "item">
) {
  const { variant, title, items, actions, ...itemProps } = props

  return (
    <Flex direction="column">
      <Flex justifyContent="space-between" alignItems="baseline">
        <Typography variant="h2">{title}</Typography>
        {actions && (
          <Toolbar>
            {actions.map((action, key) => (
              <ActionButton key={key} {...action} text="test" />
            ))}
          </Toolbar>
        )}
      </Flex>
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
