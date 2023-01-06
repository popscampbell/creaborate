import { Button, Flex, Text, useTheme } from "@aws-amplify/ui-react"
import CreaborateLink from "../Components/CreaborateLink"

export default function AppBar() {
  const { tokens } = useTheme()

  return (
    <Flex
      as="header"
      alignItems="baseline"
      paddingBottom={16}
      backgroundColor="background.secondary"
      padding={tokens.space.medium}
    >
      <Flex alignItems="baseline">
        <CreaborateLink to="/">
          <Text variation="primary" fontSize="xl">
            Creaborate<sup style={{ fontSize: "small" }}>&reg;</sup>
          </Text>
        </CreaborateLink>
      </Flex>

      <Flex grow={1} justifyContent="center"></Flex>

      <Flex
        justifyContent="flex-end"
        alignItems="baseline"
        columnGap={tokens.space.xxxs}
      >
        <Button>Sign out</Button>
      </Flex>
    </Flex>
  )
}
