import { Cancel, Save } from "@mui/icons-material"
import {
  Autocomplete,
  Box,
  IconButton,
  TextField,
  Toolbar,
  Typography
} from "@mui/material"
import { DeleteButton } from "Components/Controls"
import EnumRadioGroup from "Components/Controls/EnumRadioGroup"
import TaskDataStore from "DataStores/TaskDataStore"
import TeamDataStore from "DataStores/TeamDataStore"
import { taskPriorityLabels, taskStatusLabels } from "Labels/enumLabels"
import { uniqueId } from "lodash"
import { Task, TaskPriority, TaskStatus, Team, TeamMember } from "models"
import { useState } from "react"

export default function TaskForm(props: {
  team: Team
  task?: Task
  onSave: () => void
  onCancel: () => void
}) {
  const { team, task, onSave, onCancel } = props

  const teamMembers = TeamDataStore.useTeamMembers(team)

  const [name, setName] = useState(task?.Name || "")
  const [description, setDescription] = useState(task?.Description || "")
  const [status, setStatus] = useState<TaskStatus>(TaskStatus.ACTIVE)
  const [priority, setPriority] = useState<TaskPriority>(TaskPriority.MEDIUM)
  const [ownerId, setOwnerId] = useState<string>(task?.taskOwnerId || "")
  const [ownerInputValue, setOwnerInputValue] = useState("")
  const [dueDate, setDueDate] = useState<Date>()
  const [startDate, setStartDate] = useState<Date>()

  function handleSave() {
    const taskProps = {
      name,
      description,
      status,
      priority,
      ownerId: ownerId,
      dueDate,
      startDate
    }
    if (task) {
      TaskDataStore.updateTask(task, taskProps).then(() => onSave())
    } else {
      TaskDataStore.createTask(team, taskProps).then(() => onSave())
    }
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
        <Autocomplete
          options={teamMembers.map((teamMember) => teamMember.id)}
          value={ownerId}
          onChange={(event, newInputValue: string | null) =>
            setOwnerId(newInputValue || "")
          }
          renderInput={(params) => <TextField {...params} />}
          inputValue={ownerInputValue}
          onInputChange={(event, newInputValue) =>
            setOwnerInputValue(newInputValue)
          }
          getOptionLabel={(option) => "Yo"}
        />
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
