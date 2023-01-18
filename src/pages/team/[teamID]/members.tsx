import Layout from "@/components/app/Layout"
import PageSection, { PageSectionVariant } from "@/components/app/PageSection"
import TeamPage from "@/components/team/TeamPage"
import { useAppSelector } from "state/hooks"

export default function TeamMembersPage() {
  const { members } = useAppSelector((state) => state.team)

  return (
    <Layout>
      <TeamPage title="Members">
        <PageSection
          variant={PageSectionVariant.AVATAR}
          items={members}
          renderLabel={(member) => member.name}
        />
      </TeamPage>
    </Layout>
  )
}
