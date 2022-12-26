import { DataStore, Predicates } from "aws-amplify"
import { Task, TaskPriority, TaskStatus, Team, TeamMember } from "models"
import useTask from "./useTask"
import useTaskOwnerTeamMember from "./useTaskOwnerTeamMember"
import useTaskOwnerUserProfile from "./useTaskOwnerUserProfile"
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
  static useTaskOwnerTeamMember = useTaskOwnerTeamMember
  static useTaskOwnerUserProfile = useTaskOwnerUserProfile

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

  static getTask(id: string) {
    return DataStore.query(Task, (task) => task.id.eq(id))
      .then((tasks) => tasks[0])
      .then((t) => this.deleteTask(t))
  }

  static updateTask(
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

  static deleteTask(task: Task) {
    return DataStore.delete(task)
  }

  static truncateTasks() {
    return DataStore.delete(Task, Predicates.ALL)
  }
}
