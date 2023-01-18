import Layout from "@/components/app/Layout"
import PageSection, { PageSectionVariant } from "@/components/app/PageSection"
import TeamPage from "@/components/team/TeamPage"
import { useAppSelector } from "state/hooks"
import { Flex } from "@aws-amplify/ui-react"
import { Typography } from "@mui/material"

export default function TeamDefaultPage() {
  const { team, members, tasks } = useAppSelector((state) => state.team)

  return (
    <Layout>
      <TeamPage title={team?.description}>
        <PageSection
          variant={PageSectionVariant.AVATAR}
          title="Members"
          items={members}
          renderLabel={(teamMember) => teamMember.name}
        />

        <PageSection
          variant={PageSectionVariant.CARD}
          title="Tasks"
          items={tasks}
          renderLabel={(task) => task.name}
          renderContent={(task) => (
            <Flex direction="column">
              <Typography>Priority: {task.priority}</Typography>
            </Flex>
          )}
        />
      </TeamPage>
    </Layout>
  )
}
