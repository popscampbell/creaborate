import Layout from "src/components/Layout"
import PageSection from "src/components/PageSection"
import TeamPage from "src/components/TeamPage"
import { useAppSelector } from "src/state/hooks"

export default function TeamMembersPage() {
  const { members } = useAppSelector((state) => state.team)

  return (
    <Layout>
      <TeamPage subtitle="Members">
        <PageSection
          variant="avatar"
          items={members}
          renderLabel={(member) => member.name}
        />
      </TeamPage>
    </Layout>
  )
}
