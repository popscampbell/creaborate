import Layout from "src/components/Layout"
import PageSection from "src/components/PageSection"
import UserPage from "src/components/UserPage"
import { useAppSelector } from "src/state/hooks"

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
