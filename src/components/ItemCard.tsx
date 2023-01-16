import { Card, CardContent, CardHeader, Typography } from "@mui/material"

export interface ItemCardProps<T> {
  item: T
  renderTitle: (item: T) => any
}

export default function ItemCard<T>(props: ItemCardProps<T>) {
  const { item, renderTitle } = props

  return (
    <Card>
      <CardContent>{renderTitle(item)}</CardContent>
    </Card>
  )
}
