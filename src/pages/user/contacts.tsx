import Layout from "@/components/Layout"
import PageSection from "@/components/PageSection"
import UserPage from "@/components/UserPage"
import { useAppSelector } from "@/state/hooks"

export default function UserContactsPage() {
  const { contacts } = useAppSelector((state) => state.user)

  return (
    <Layout>
      <UserPage subtitle="Contacts">
        <PageSection items={contacts} renderLabel={(contact) => contact.id} />
      </UserPage>
    </Layout>
  )
}
