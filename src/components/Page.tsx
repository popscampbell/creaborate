import { Flex } from "@aws-amplify/ui-react"
import { Typography } from "@mui/material"

export interface PageProps {
  title?: string
  subtitle?: string
  children?: any
}

export default function Page(props: PageProps) {
  const { title, subtitle, children } = props

  return (
    <Flex direction="column">
      {title && <Typography variant="h4">{title}</Typography>}
      {subtitle && <Typography variant="subtitle1">{subtitle}</Typography>}
      {children}
    </Flex>
  )
}
