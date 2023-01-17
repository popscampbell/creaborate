import Layout from "@/components/app/Layout"
import PageSection from "@/components/app/PageSection"
import UserPage from "@/components/user/UserPage"
import { useAppSelector } from "state/hooks"

export default function UserContactsPage() {
  const { contacts } = useAppSelector((state) => state.user)

  return (
    <Layout>
      <UserPage title="Contacts">
        <PageSection items={contacts} renderLabel={(contact) => contact.id} />
      </UserPage>
    </Layout>
  )
}
