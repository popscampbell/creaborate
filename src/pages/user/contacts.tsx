import PageSection from "@/components/app/PageSection"
import UserPage from "@/components/user/UserPage"
import React from "react"
import { useAppSelector } from "state/hooks"

export default function UserContactsPage() {
  const { contacts } = useAppSelector((state) => state.user)
  const [open, setOpen] = React.useState(false)

  function handleNew() {}

  return (
    <UserPage
      title="Contacts"
      actions={[
        {
          text: "New contact",
          onClick: handleNew
        }
      ]}
    >
      <PageSection
        items={contacts}
        renderLabel={(contact) => contact.contact.name}
        linkTo={(contact) => `/user/contact/${contact.id}`}
      />
    </UserPage>
  )
}
