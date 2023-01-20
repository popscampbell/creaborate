import { UserContact } from "@/models"
import FormBuilder from "../../formBuilder/FormBuilder"

export default function UserContactForm(props: { userContact: UserContact }) {
  const { userContact } = props

  function handleDelete() {
    alert("delete")
  }

  function handleSave(values: UserContact) {
    alert("save")
  }

  return (
    <FormBuilder
      item={userContact}
      fields={[]}
      onSave={handleSave}
      onDelete={handleDelete}
    />
  )
}
