import { Flex } from "@aws-amplify/ui-react"
import { Typography } from "@mui/material"

export default function Page(props: { title?: string; children?: any }) {
  const { title, children } = props

  return (
    <Flex direction="column">
      <Typography variant="h4">{title}</Typography>
      {children}
    </Flex>
  )
}
