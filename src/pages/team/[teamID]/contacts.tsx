import Layout from "components/Layout"
import PageSection from "components/PageSection"
import TeamPage from "components/TeamPage"
import { useAppSelector } from "state/hooks"

export default function TeamContactsPage() {
  const { contacts } = useAppSelector((state) => state.team)

  return (
    <Layout>
      <TeamPage subtitle="Contacts">
        <PageSection items={contacts} renderLabel={(contact) => contact.id} />
      </TeamPage>
    </Layout>
  )
}
