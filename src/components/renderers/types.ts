export interface ItemProps<T> {
  item: T
  renderLabel: (item: T) => string
  renderContent?: (item: T) => any
  linkTo?: (item: T) => string
}
