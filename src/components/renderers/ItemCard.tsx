import { Card, CardContent, Typography } from "@mui/material"
import Link from "next/link"
import { ItemProps } from "./types"

export default function ItemCard<T>(props: ItemProps<T>) {
  const { item, renderLabel, renderContent, linkTo } = props

  function TheCard() {
    return (
      <Card>
        <CardContent>
          <Typography>{renderLabel(item)}</Typography>
          {renderContent && renderContent(item)}
        </CardContent>
      </Card>
    )
  }

  return linkTo ? (
    <Link href={linkTo(item)}>
      <TheCard />
    </Link>
  ) : (
    <TheCard />
  )
}
