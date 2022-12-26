import {
  Add,
  ArrowDownward,
  Delete,
  Edit,
  PriorityHigh
} from "@mui/icons-material"
import {
  Box,
  Drawer,
  IconButton,
  Paper,
  TextField,
  Toolbar,
  Typography
} from "@mui/material"
import { DataGrid, GridValueGetterParams } from "@mui/x-data-grid"
import { StaticDatePicker } from "@mui/x-date-pickers"
import TeamMemberName from "Components/Team/TeamMembers/TeamMemberName"
import TaskDataStore from "DataStores/TaskDataStore"
import TeamDataStore from "DataStores/TeamDataStore"
import { Task, TaskPriority, TaskStatus, Team } from "models"
import moment from "moment"
import { useState } from "react"
import TaskForm from "./TaskForm"

export default function TeamTasks(props: { team: Team }) {
  const { team } = props

  const tasks = TaskDataStore.useTasksByTeam(team, TaskStatus.ACTIVE)
  const teamMembers = TeamDataStore.useTeamMembers(team)

  function getTaskOwner(task: Task) {
    return teamMembers.find((teamMember) => teamMember.id === task.taskOwnerId)
  }

  const [open, setOpen] = useState(false)
  const [selectedTask, setSelectedTask] = useState<Task>()

  function getDate(value?: string) {
    return value ? moment(new Date(value)).fromNow() : "(none)"
  }

  function PriorityIcon(props: { task: Task }) {
    return props.task.Priority === TaskPriority.HIGH ? (
      <PriorityHigh fontSize="small" color="error" />
    ) : props.task.Priority === TaskPriority.LOW ? (
      <ArrowDownward fontSize="small" color="action" />
    ) : (
      <></>
    )
  }

  const [value, setValue] = useState<any>()
  function handleDueDateChange(value: any) {}

  function handleNewTask() {
    setSelectedTask(undefined)
    setOpen(true)
  }

  function handleEditTask(id: string) {
    const task = tasks.find((task) => task.id === id)
    if (task) {
      setSelectedTask(task)
      setOpen(true)
    }
  }

  function handleDeleteTask(id: string) {
    const task = tasks.find((task) => task.id === id)
    task && TaskDataStore.deleteTask(task)
  }

  function handleSave() {}

  return (
    <Paper variant="outlined">
      <Box padding={2}>
        <Box marginBottom={2}>
          <Box display="flex">
            <Typography variant="h5" marginBottom={1} flexGrow="1">
              Tasks
            </Typography>
            <Toolbar>
              <IconButton onClick={handleNewTask} children={<Add />} />
            </Toolbar>
          </Box>
          {tasks.length > 0 && (
            <Box marginBottom={2} display="flex" height="100%">
              <Box flexGrow={1}>
                <DataGrid
                  columns={[
                    {
                      maxWidth: 50,
                      field: "Priority",
                      renderHeader: () => (
                        <PriorityHigh
                          titleAccess="Priority"
                          fontSize="small"
                          color="action"
                        />
                      ),
                      renderCell: (params) => <PriorityIcon task={params.row} />
                    },
                    {
                      flex: 2,
                      field: "Name",
                      headerName: "Task",
                      editable: true
                    },
                    {
                      flex: 1,
                      field: "Owner",
                      headerName: "Owner",
                      renderCell: (params) => {
                        const taskOwner = getTaskOwner(params.row)
                        return (
                          <Typography
                            children={
                              taskOwner && (
                                <TeamMemberName teamMember={taskOwner} />
                              )
                            }
                          />
                        )
                      }
                    },
                    {
                      flex: 1,
                      field: "DueDate",
                      headerName: "Due",
                      editable: true,
                      valueGetter: (params: GridValueGetterParams<string>) =>
                        getDate(params.value),
                      renderEditCell: (params) => {
                        return (
                          <StaticDatePicker
                            displayStaticWrapperAs="desktop"
                            openTo="year"
                            value={value}
                            onChange={(newValue) => {
                              setValue(newValue)
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        )
                      }
                    },
                    {
                      field: "id",
                      renderCell: (params) => {
                        return (
                          <Toolbar>
                            <IconButton
                              onClick={() => handleEditTask(params.row.id)}
                            >
                              <Edit />
                            </IconButton>
                            <IconButton
                              onClick={() => handleDeleteTask(params.row.id)}
                            >
                              <Delete />
                            </IconButton>
                          </Toolbar>
                        )
                      }
                    }
                  ]}
                  rows={tasks}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  autoHeight
                />
              </Box>
            </Box>
          )}
          {tasks.length === 0 && (
            <Typography>There are no tasks yet.</Typography>
          )}
        </Box>
        <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
          <Box margin={2}>
            <TaskForm
              team={team}
              task={selectedTask}
              onSave={() => setOpen(false)}
              onCancel={() => setOpen(false)}
            />
          </Box>
        </Drawer>
      </Box>
    </Paper>
  )
}
