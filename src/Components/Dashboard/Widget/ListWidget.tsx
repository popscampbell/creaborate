import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  List,
  ListItem,
  Skeleton
} from "@mui/material"
import { Fragment } from "react"
import useStyles from "./ListWidget.styles"

interface ListWidgetProps<T> {
  title: string
  items?: T[]
  headerAction?: JSX.Element & React.ReactNode
  primary: (item: T) => JSX.Element & React.ReactNode
  secondary?: (item: T) => JSX.Element & React.ReactNode
}

export default function ListWidget<T>(props: ListWidgetProps<T>) {
  const { title, items, headerAction, primary, secondary } = props
  const classes = useStyles()

  function Loading() {
    return (
      <>
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </>
    )
  }

  return (
    <Card className={classes.root} variant="outlined">
      <CardHeader title={title} action={headerAction} />
      <CardContent>
        {!items && <Loading />}
        {items && items.length > 0 && (
          <List dense>
            {items.map((item, i) => (
              <Fragment key={i}>
                <ListItem disablePadding>
                  {primary(item)}
                  {secondary && secondary(item)}
                </ListItem>
                <Divider variant="fullWidth" component="li" />
              </Fragment>
            ))}
          </List>
        )}
      </CardContent>
    </Card>
  )
}
