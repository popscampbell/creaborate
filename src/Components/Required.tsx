import { Text } from "@aws-amplify/ui-react"

export default function Required() {
  return (
    <Text as="span" fontSize="0.8rem" color="red" fontStyle="italic">
      {" "}
      *
    </Text>
  )
}
