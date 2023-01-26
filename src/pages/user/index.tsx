import PageSection from "@/components/app/PageSection"
import UserPage from "@/components/user/UserPage"
import { Flex } from "@aws-amplify/ui-react"
import { Typography } from "@mui/material"
import { useAppSelector } from "state/hooks"

export default function UserDashboard() {
  const { invitations, tasks, teams } = useAppSelector((state) => state.user)

  return (
    <UserPage title="Dashboard">
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
  )
}
