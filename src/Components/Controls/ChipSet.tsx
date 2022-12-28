import { Paper, Box, Typography, Skeleton } from "@mui/material"
import { uniqueId } from "lodash"

export default function ChipSet<T>(props: {
  heading?: string
  items?: T[]
  chip: (item: T) => React.ReactNode
}) {
  const { items, heading, chip } = props

  return (
    <Box marginBottom={2}>
      {heading && (
        <Typography variant="h5" marginBottom={1} children={heading} />
      )}
      <Box marginBottom={2}>
        {!items && <Skeleton />}
        {items &&
          items.map((item) => (
            <Box key={uniqueId()} display="inline" marginRight={1}>
              {chip(item)}
            </Box>
          ))}
      </Box>
      {items && items.length === 0 && <Typography>Empty</Typography>}
    </Box>
  )
}
