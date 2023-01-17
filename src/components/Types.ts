export interface ItemProps<T> {
  item: T
  renderLabel: (item: T) => string
  renderContent?: (item: T) => any
  linkTo?: (item: T) => string
}

export type PageSectionVariant = "card" | "pill" | "avatar"
