import { DataStore } from "aws-amplify"
import { Task, TaskPriority, TaskStatus, Team, TeamMember } from "models"
import useTask from "./useTask"
import useTasksByProject from "./useTasksByProject"
import useTasksByProjectMilestone from "./useTasksByProjectMilestone"
import useTasksByTeam from "./useTasksByTeam"
import useTasksByTeamMember from "./useTasksByTeamMember"
import useTasksByUserProfile from "./useTasksByUserProfile"

export default class TaskDataStore {
  static useTask = useTask
  static useTasksByProject = useTasksByProject
  static useTasksByProjectMilestone = useTasksByProjectMilestone
  static useTasksByTeam = useTasksByTeam
  static useTasksByTeamMember = useTasksByTeamMember
  static useTasksByUserProfile = useTasksByUserProfile

  static async createTask(
    team: Team,
    properties: {
      name: string
      priority?: TaskPriority
      description?: string
      owner?: TeamMember
      dueDate?: Date
      startDate?: Date
    }
  ) {
    const { name, priority, description, owner, dueDate, startDate } =
      properties

    return DataStore.save(
      new Task({
        Team: team.id,
        Name: name,
        Status: TaskStatus.ACTIVE,
        Priority: priority || TaskPriority.MEDIUM,
        Description: description,
        Owner: owner,
        DueDate: dueDate?.toISOString(),
        StartDate: startDate?.toISOString(),
      })
    )
  }

  updateTask(
    task: Task,
    properties: {
      name?: string
      status?: TaskStatus
      priority?: TaskPriority
      description?: string
      owner?: TeamMember
      dueDate?: Date
      startDate?: Date
      completedByTeamMember?: string
      completedDate?: Date
    }
  ) {
    const {
      name,
      status,
      priority,
      description,
      owner,
      dueDate,
      startDate,
      completedByTeamMember,
      completedDate,
    } = properties

    return DataStore.save(
      Task.copyOf(task, (updated) => {
        if (name) updated.Name = name
        if (status) updated.Status = status
        if (priority) updated.Priority = priority
        if (description) updated.Description = description
        if (owner) updated.Owner = owner
        if (dueDate) updated.DueDate = dueDate.toISOString()
        if (startDate) updated.StartDate = startDate.toISOString()
        if (completedByTeamMember)
          updated.CompletedByTeamMember = completedByTeamMember
        if (completedDate) updated.CompletedDate = completedDate.toISOString()
      })
    )
  }

  deleteTask(task: Task) {
    return DataStore.delete(task)
  }
}
