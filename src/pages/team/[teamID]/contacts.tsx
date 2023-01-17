import Layout from "src/components/Layout"
import PageSection from "src/components/PageSection"
import TeamPage from "src/components/TeamPage"
import { useAppSelector } from "src/state/hooks"

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
