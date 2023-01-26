import { Box } from "@mui/material"
import { isArray } from "lodash"
import React from "react"
import { DeepPartial, FormContainer } from "react-hook-form-mui"
import CreaborateFormToolbar from "./CreaborateFormToolbar"

export enum CreaborateFormVariant {
  FULL = "FULL",
  CONFIRMATION = "CONFIRMATION"
}

export default function CreaborateForm<T>(props: {
  source: DeepPartial<T>
  onSuccess: (values: T) => void
  variant?: CreaborateFormVariant
  onCancel?: () => void
  onDelete?: () => void
  children: React.ReactNode[] | React.ReactNode
}) {
  const { source, onSuccess, onCancel, onDelete, variant } = props
  const children = isArray(props.children) ? props.children : [props.children]

  const [enabled, setEnabled] = React.useState(
    variant === CreaborateFormVariant.CONFIRMATION
  )

  function handleEdit() {
    setEnabled(true)
  }

  function handleCancel() {
    setEnabled(false)
    onCancel?.()
  }

  function handleSuccess(values: T) {
    setEnabled(false)
    onSuccess(values)
  }

  return (
    <FormContainer defaultValues={source} onSuccess={handleSuccess}>
      <Box display="flex" flexDirection="column" rowGap={3}>
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(child, { disabled: !enabled })
            : child
        )}
      </Box>

      <CreaborateFormToolbar
        enabled={enabled}
        onEdit={handleEdit}
        onCancel={handleCancel}
        onDelete={onDelete}
      />
    </FormContainer>
  )
}
