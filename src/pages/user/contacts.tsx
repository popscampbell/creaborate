import Layout from "@/components/app/Layout"
import PageSection from "@/components/app/PageSection"
import NewUserContactDialog from "@/components/user/userContact/NewUserContactDialog"
import UserPage from "@/components/user/UserPage"
import { UserContact } from "@/models"
import Link from "next/link"
import React from "react"
import { useAppSelector } from "state/hooks"

export default function UserContactsPage() {
  const { contacts } = useAppSelector((state) => state.user)
  const [open, setOpen] = React.useState(false)

  function handleSave(inputs: UserContact) {}
  return (
    <Layout>
      <UserPage title="Contacts" actions={<NewUserContactDialog />}>
        <PageSection
          items={contacts}
          renderLabel={(contact) => contact.contact.name}
          linkTo={(contact) => `/user/contact/${contact.id}`}
        />
      </UserPage>
    </Layout>
  )
}
