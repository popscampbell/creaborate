import { ArrowDownward, Delete, PriorityHigh } from "@mui/icons-material"
import { Box, IconButton, Paper, TextField, Typography } from "@mui/material"
import { DataGrid, GridValueGetterParams } from "@mui/x-data-grid"
import { DatePicker, StaticDatePicker } from "@mui/x-date-pickers"
import TaskDataStore from "DataStores/TaskDataStore"
import TeamDataStore from "DataStores/TeamDataStore"
import UserProfileDataStore from "DataStores/UserProfileDataStore"
import { Task, TaskPriority, TaskStatus, Team } from "models"
import moment from "moment"
import { useState } from "react"

export default function TeamTasks(props: { team: Team }) {
  const { team } = props

  const teamTasks = TaskDataStore.useTasksByTeam(team, TaskStatus.ACTIVE)
  const tasks: Task[] = teamTasks?.length > 0 ? [teamTasks[0]] : []
  //const teamMembers = TeamDataStore.useTeamMembers(team)
  //const userProfiles = UserProfileDataStore.useUserProfiles()

  // console.log("teamMembers:", teamMembers)
  // console.log("userProfiles:", userProfiles)

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

  function TaskOwnerName(props: { task: Task }) {
    const teamMember = TaskDataStore.useTaskOwnerTeamMember(props.task)
    //const userProfile = TaskDataStore.useTaskOwnerUserProfile(props.task)

    return <>{teamMember?.id || "(none)"}</>
  }

  const [value, setValue] = useState<any>()
  function handleDueDateChange(value: any) {}

  function handleDeleteTask(id: string) {
    TaskDataStore.getTask(id).then((task) => TaskDataStore.deleteTask(task))
  }

  return (
    <Paper variant="outlined">
      <Box padding={2}>
        <Box marginBottom={2}>
          <Typography variant="h5" marginBottom={1}>
            Tasks
          </Typography>
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
                      renderCell: (params) => (
                        <PriorityIcon task={params.row} />
                      ),
                    },
                    {
                      flex: 2,
                      field: "Name",
                      headerName: "Task",
                      editable: true,
                    },
                    {
                      flex: 1,
                      field: "Owner",
                      headerName: "Owner",
                      renderCell: (params) => (
                        <TaskOwnerName task={params.row} />
                      ),
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
                      },
                    },
                    {
                      field: "id",
                      renderCell: (params) => {
                        return (
                          <IconButton
                            onClick={() => handleDeleteTask(params.row.id)}
                          >
                            <Delete />
                          </IconButton>
                        )
                      },
                    },
                  ]}
                  rows={teamTasks}
                  pageSize={5}
                  rowsPerPageOptions={[5]}
                  autoHeight
                />
              </Box>
            </Box>
          )}
          {teamTasks.length === 0 && (
            <Typography>There are no tasks yet.</Typography>
          )}
        </Box>
      </Box>
    </Paper>
  )
}
