// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

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

const TeamMemberStatus = {
  "INVITED": "INVITED",
  "CONFIRMED": "CONFIRMED",
  "DECLINED": "DECLINED",
  "DEPARTED": "DEPARTED"
};

const TeamMemberRole = {
  "ADMINISTRATOR": "ADMINISTRATOR",
  "MEMBER": "MEMBER"
};

const TeamType = {
  "TEAM": "TEAM",
  "BAND": "BAND",
  "GROUP": "GROUP"
};

const { TaskDiscussion, Task, TeamMember, Team, UserProfile } = initSchema(schema);

export {
  TaskDiscussion,
  Task,
  TeamMember,
  Team,
  UserProfile,
  TaskPriority,
  TaskStatus,
  UserProfileVisibility,
  TeamVisibility,
  TeamMemberStatus,
  TeamMemberRole,
  TeamType
};