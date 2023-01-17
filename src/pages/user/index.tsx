import Layout from "src/components/Layout"
import PageSection from "src/components/PageSection"
import UserPage from "src/components/UserPage"
import { useAppSelector } from "src/state/hooks"
import { Flex } from "@aws-amplify/ui-react"
import { Typography } from "@mui/material"

export default function UserDashboard() {
  const { invitations, tasks, teams } = useAppSelector((state) => state.user)

  return (
    <Layout>
      <UserPage subtitle="Dashboard">
        <PageSection
          title="Invitations"
          items={invitations}
          renderLabel={(invitation) => invitation.teamID}
        />

        <PageSection
          title="Tasks"
          items={tasks}
          renderLabel={(task) => task.name}
          renderContent={(task) => (
            <Flex direction="column">
              <Typography>Priority: {task.priority}</Typography>
            </Flex>
          )}
        />

        <PageSection
          title="Teams"
          items={teams}
          renderLabel={(team) => team.name}
          linkTo={(team) => `/team/${team.id}`}
        />
      </UserPage>
    </Layout>
  )
}
