import Layout from "@/components/Layout"
import PageSection from "@/components/PageSection"
import TeamPage from "@/components/TeamPage"
import { useAppSelector } from "@/state/hooks"

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
