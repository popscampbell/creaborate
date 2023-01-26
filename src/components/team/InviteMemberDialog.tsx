import { useSearchPublicUsers } from "@/data/userUtils"
import { Autocomplete, AutocompleteChangeReason, Dialog } from "@mui/material"
import React from "react"
import { AutocompleteElement } from "react-hook-form-mui"
import CreaborateForm, { CreaborateFormVariant } from "../forms/CreaborateForm"
import CreaborateTextField from "../forms/CreaborateTextField"

export function InviteMemberDialog(props: {
  open: boolean
  onConfirm: (value: { user: string }) => void
  onCancel: () => void
}) {
  const { open, onConfirm, onCancel } = props

  const [query, setQuery] = React.useState("")

  const options = useSearchPublicUsers(query)

  function handleChange(value: any, reason: AutocompleteChangeReason) {
    setQuery(value)
  }

  return (
    <Dialog open={open}>
      <CreaborateForm
        variant={CreaborateFormVariant.CONFIRMATION}
        source={{ user: "" }}
        onSuccess={onConfirm}
        onCancel={onCancel}
      >
        <AutocompleteElement name="user" label="User" options={options} />
      </CreaborateForm>
    </Dialog>
  )
}
