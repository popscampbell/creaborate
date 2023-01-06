import { Flex, Text, useTheme } from "@aws-amplify/ui-react"

export default function Footer() {
  const { tokens } = useTheme()

  const year = new Date().getFullYear()

  return (
    <Flex
      as="footer"
      justifyContent="flex-end"
      paddingBlock={tokens.space.small}
      paddingInline={tokens.space.large}
      backgroundColor={tokens.colors.background.secondary}
    >
      <Text fontSize="smaller">&copy; Michael Campbell {year}</Text>
    </Flex>
  )
}
