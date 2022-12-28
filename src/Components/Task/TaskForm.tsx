import { useAuthenticator } from "@aws-amplify/ui-react"
import { Cancel, Save } from "@mui/icons-material"
import {
  Autocomplete,
  Box,
  IconButton,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material"
import { DataStore } from "aws-amplify"
import { DeleteButton } from "Components/Controls"
import EnumRadioGroup from "Components/Controls/EnumRadioGroup"
import TaskDataStore from "DataStores/TaskDataStore"
import TeamDataStore from "DataStores/TeamDataStore"
import UserProfileDataStore from "DataStores/UserProfileDataStore"
import { taskPriorityLabels, taskStatusLabels } from "Labels/enumLabels"
import { uniqueId } from "lodash"
import { Task, TaskPriority, TaskStatus, Team, TeamMember } from "models"
import React from "react"
import { useState } from "react"

export default function TaskForm(props: {
  team: Team
  task?: Task
  onSave: () => void
  onCancel: () => void
}) {
  const { team, task, onSave, onCancel } = props

  const { user } = useAuthenticator()
  const userProfile = UserProfileDataStore.useUserProfile(user.username || "")

  const [userTeamMember, setUserTeamMember] = React.useState<TeamMember>()

  React.useEffect(() => {
    DataStore.query(TeamMember, (member) =>
      member.teamMemberUserProfileId.eq(userProfile?.id || "")
    )
      .then((member) => (member.length > 0 ? member[0] : undefined))
      .then((member) => setUserTeamMember(member))
  }, [userProfile])

  const [name, setName] = useState(task?.Name || "")
  const [description, setDescription] = useState(task?.Description || "")
  const [status, setStatus] = useState<TaskStatus>(TaskStatus.ACTIVE)
  const [priority, setPriority] = useState<TaskPriority>(TaskPriority.MEDIUM)
  const [ownerId, setOwnerId] = useState<string>(task?.taskOwnerId || "")
  const [ownerInputValue, setOwnerInputValue] = useState("")
  const [dueDate, setDueDate] = useState<Date>()
  const [startDate, setStartDate] = useState<Date>()

  function handleSave() {
    console.log(
      "user:",
      user,
      ", userProfile:",
      userProfile,
      ", userTeamMember:",
      userTeamMember
    )
    const taskProps = {
      name,
      description,
      status,
      priority,
      ownerId,
      owner: userTeamMember,
      dueDate,
      startDate,
    }
    if (task) {
      TaskDataStore.updateTask(task, taskProps).then(() => onSave())
    } else {
      TaskDataStore.createTask(team, taskProps)
        .then((newTask) => {})
        .then(() => onSave())
    }
  }

  function TeamMemberPicker(props: { team: Team }) {
    const { team } = props

    const [teamMembers, setTeamMembers] = React.useState<TeamMember[]>([])

    React.useEffect(() => {
      team.TeamMembers.toArray().then((members) => {
        setTeamMembers(members)
        return members
      })
    })

    return (
      <Autocomplete
        disablePortal
        id={uniqueId()}
        options={teamMembers}
        getOptionLabel={(teamMember) => teamMember.Role}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Owner" />}
      />
    )
  }

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ marginBottom: 2 }}
        children={task ? task.Name : "New task"}
      />
      <Box marginBottom={2}>
        <TextField
          fullWidth
          label="Name"
          id={uniqueId()}
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Box>
      <Box marginBottom={2}>
        <TextField
          label="Description"
          fullWidth
          multiline
          id={uniqueId()}
          name="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </Box>
      <Box marginBottom={2}>
        <EnumRadioGroup
          label="Status"
          name="status"
          labels={taskStatusLabels}
          value={status}
          onChange={(newValue) => setStatus(newValue as TaskStatus)}
        />
      </Box>
      <Box marginBottom={2}>
        <EnumRadioGroup
          label="Priority"
          name="priority"
          labels={taskPriorityLabels}
          value={priority}
          onChange={(newValue) => setPriority(newValue)}
        />
      </Box>
      <Box marginBottom={2}>
        <TeamMemberPicker team={team} />
      </Box>
      <Box marginBottom={2}>
        <TextField
          label="Due date"
          id={uniqueId()}
          name="dueDate"
          value={dueDate}
          onChange={(event) => setDueDate(new Date(event.target.value))}
        />
      </Box>
      <Box marginBottom={2}>
        <TextField
          label="Start date"
          id={uniqueId()}
          name="startDate"
          value={startDate}
          onChange={(event) => setStartDate(new Date(event.target.value))}
        />
      </Box>
      <Toolbar sx={{ display: "flex", alignContent: "end" }}>
        <IconButton onClick={handleSave} children={<Save />} />
        <IconButton onClick={onCancel} children={<Cancel />} />
        {task && <DeleteButton icon item={task} itemType="task" />}
      </Toolbar>
    </Box>
  )
}
