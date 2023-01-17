import Layout from "components/Layout"
import PageSection from "components/PageSection"
import TeamPage from "components/TeamPage"
import { useAppSelector } from "state/hooks"
import { Flex } from "@aws-amplify/ui-react"
import { Typography } from "@mui/material"

export default function TeamDefaultPage() {
  const { team, members, tasks } = useAppSelector((state) => state.team)

  return (
    <Layout>
      <TeamPage subtitle={team?.description}>
        <PageSection
          variant="avatar"
          title="Members"
          items={members}
          renderLabel={(teamMember) => teamMember.name}
        />

        <PageSection
          variant="card"
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
