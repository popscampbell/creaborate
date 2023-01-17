import Layout from "@/components/app/Layout"
import PageSection from "@/components/app/PageSection"
import TeamPage from "@/components/team/TeamPage"
import { useAppSelector } from "state/hooks"

export default function TeamContactsPage() {
  const { contacts } = useAppSelector((state) => state.team)

  return (
    <Layout>
      <TeamPage title="Contacts">
        <PageSection items={contacts} renderLabel={(contact) => contact.id} />
      </TeamPage>
    </Layout>
  )
}
