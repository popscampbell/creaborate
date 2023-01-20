import { Flex } from "@aws-amplify/ui-react"
import { Paper, Typography, useTheme } from "@mui/material"
import React from "react"

export default function FormBuilderFieldGroup(props: {
  label?: string
  form: React.ReactNode
}) {
  const { label, form } = props

  const theme = useTheme()

  return (
    <Paper variant="outlined">
      <Flex direction="column" padding={theme.spacing(2)}>
        {label && <Typography>{label}</Typography>}
        {form}
      </Flex>
    </Paper>
  )
}
