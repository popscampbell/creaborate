import PageSection, { PageSectionVariant } from "@/components/app/PageSection"
import TeamPage from "@/components/team/TeamPage"
import { Flex } from "@aws-amplify/ui-react"
import AddTaskIcon from "@mui/icons-material/AddTask"
import GroupAddIcon from "@mui/icons-material/GroupAdd"
import { Typography } from "@mui/material"
import { useAppSelector } from "state/hooks"

export default function TeamDefaultPage() {
  const { team, members, tasks } = useAppSelector((state) => state.team)
  const { username } = useAppSelector((state) => state.user)

  function handleInvite() {}

  function handleAddTask() {}

  return (
    <TeamPage title={team?.description}>
      <PageSection
        variant={PageSectionVariant.AVATAR}
        title="Members"
        items={members}
        renderLabel={(teamMember) => teamMember.name ?? username}
        actions={[
          {
            text: "Invite your friends",
            onClick: handleInvite,
            icon: <GroupAddIcon />
          }
        ]}
      />

      <PageSection
        variant={PageSectionVariant.CARD}
        title="Tasks"
        items={tasks}
        actions={[
          {
            text: "Add a task",
            onClick: handleAddTask,
            icon: <AddTaskIcon />
          }
        ]}
        renderLabel={(task) => task.name}
        renderContent={(task) => (
          <Flex direction="column">
            <Typography>Priority: {task.priority}</Typography>
          </Flex>
        )}
      />
    </TeamPage>
  )
}
