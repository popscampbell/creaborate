import Layout from "@/components/layout"
import PageSection from "@/components/PageSection"
import UserPage from "@/components/UserPage"
import { useAppSelector } from "@/state/hooks"
import { Typography } from "@mui/material"

export default function UserDashboard() {
  const { invitations, tasks } = useAppSelector((state) => state.user)

  return (
    <Layout>
      <UserPage title="Dashboard">
        <PageSection
          title="Invitations"
          items={invitations}
          renderTitle={(invitation) => (
            <Typography>{invitation.teamID}</Typography>
          )}
        />
        <PageSection
          title="Tasks"
          items={tasks}
          renderTitle={(task) => <Typography>{task.name}</Typography>}
        />
      </UserPage>
    </Layout>
  )
}
