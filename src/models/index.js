// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const RecurrenceFrequency = {
  "DAILY": "DAILY",
  "WEEKLY": "WEEKLY",
  "MONTHLY": "MONTHLY",
  "ANNULLY": "ANNULLY"
};

const ProjectMilestoneStatus = {
  "ACTIVE": "ACTIVE",
  "CLOSED": "CLOSED"
};

const ProjectStatus = {
  "DRAFT": "DRAFT",
  "ACTIVE": "ACTIVE",
  "COMPLETED": "COMPLETED",
  "CANCELED": "CANCELED"
};

const TaskPriority = {
  "HIGH": "HIGH",
  "MEDIUM": "MEDIUM",
  "LOW": "LOW"
};

const TaskStatus = {
  "ACTIVE": "ACTIVE",
  "CLOSED": "CLOSED",
  "ARCHIVED": "ARCHIVED"
};

const TeamMemberRole = {
  "ADMINISTRATOR": "ADMINISTRATOR",
  "MEMBER": "MEMBER"
};

const TeamMemberStatus = {
  "INVITED": "INVITED",
  "CONFIRMED": "CONFIRMED",
  "DECLINED": "DECLINED",
  "DEPARTED": "DEPARTED"
};

const UserProfileVisibility = {
  "PRIVATE": "PRIVATE",
  "PUBLIC": "PUBLIC",
  "ARCHIVED": "ARCHIVED"
};

const TeamVisibility = {
  "PRIVATE": "PRIVATE",
  "PUBLIC": "PUBLIC",
  "ARCHIVED": "ARCHIVED"
};

const TeamType = {
  "TEAM": "TEAM",
  "BAND": "BAND",
  "GROUP": "GROUP"
};

const { EventImage, Image, AssetImage, LocationImage, Asset, Expense, Location, Event, ProjectMilestone, Project, TaskComment, Task, TeamMember, UserProfile, Team, Recurrence } = initSchema(schema);

export {
  EventImage,
  Image,
  AssetImage,
  LocationImage,
  Asset,
  Expense,
  Location,
  Event,
  ProjectMilestone,
  Project,
  TaskComment,
  Task,
  TeamMember,
  UserProfile,
  Team,
  RecurrenceFrequency,
  ProjectMilestoneStatus,
  ProjectStatus,
  TaskPriority,
  TaskStatus,
  TeamMemberRole,
  TeamMemberStatus,
  UserProfileVisibility,
  TeamVisibility,
  TeamType,
  Recurrence
};