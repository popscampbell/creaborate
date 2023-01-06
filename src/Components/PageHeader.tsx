import { Flex, Heading, useTheme, ButtonGroup } from "@aws-amplify/ui-react"
import React from "react"

export default function PageHeader(props: {
  title: string
  actions?: React.ReactNode
}) {
  const { title, actions } = props
  const { tokens } = useTheme()

  return (
    <Flex marginBottom={tokens.space.large} alignItems="baseline">
      <Heading grow={1} marginBottom={20} level={1}>
        {title}
      </Heading>
      <ButtonGroup>{actions}</ButtonGroup>
    </Flex>
  )
}
