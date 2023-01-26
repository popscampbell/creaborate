import FormBuilder from "@/components/formBuilder/FormBuilder"
import { loadUserContacts } from "@/data/userUtils"
import { UserContact } from "@/models"
import { useAppDispatch, useAppSelector } from "@/state/hooks"
import { PersonAdd } from "@mui/icons-material"
import { Button, Dialog } from "@mui/material"
import { DataStore } from "aws-amplify"
import React from "react"
import {
  defaultUserContact,
  requiredUserContactFields,
  UserContactProps
} from "./userContactFields"

export default function NewUserContactDialog() {
  const userContact = new UserContact(defaultUserContact)

  const { username } = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()

  const [open, setOpen] = React.useState(false)

  function handleOpen() {
    setOpen(true)
  }

  function handleSave() {
    setOpen(false)
  }

  function handleCancel() {
    setOpen(false)
  }

  return (
    <>
      <Button
        variant="outlined"
        title="Create a new contact"
        startIcon={<PersonAdd />}
        onClick={handleOpen}
      >
        New contact
      </Button>
      <Dialog open={open}>
        <FormBuilder
          item={userContact.contact}
          fields={requiredUserContactFields}
          dialog
          onSave={handleSave}
          onCancel={handleCancel}
        />
      </Dialog>
    </>
  )
}
