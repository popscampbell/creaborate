// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const UserProfileVisibility = {
  "PRIVATE": "PRIVATE",
  "PUBLIC": "PUBLIC",
  "ARCHIVED": "ARCHIVED"
};

const UserNotificationLevel = {
  "NORMAL": "NORMAL",
  "INFO": "INFO",
  "SUCCESS": "SUCCESS",
  "WARNING": "WARNING",
  "ERROR": "ERROR"
};

const TeamVisibility = {
  "PRIVATE": "PRIVATE",
  "PUBLIC": "PUBLIC",
  "ARCHIVED": "ARCHIVED"
};

const TeamType = {
  "TEAM": "TEAM",
  "BAND": "BAND",
  "GROUP": "GROUP",
  "CUSTOM": "CUSTOM"
};

const TeamMemberRole = {
  "ADMINISTRATOR": "ADMINISTRATOR",
  "MEMBER": "MEMBER"
};

const TeamInvitationStatus = {
  "SENT": "SENT",
  "ACCEPTED": "ACCEPTED",
  "DECLINED": "DECLINED",
  "EXPIRED": "EXPIRED"
};

const TaskStatus = {
  "ACTIVE": "ACTIVE",
  "CLOSED": "CLOSED",
  "ARCHIVED": "ARCHIVED"
};

const TaskPriority = {
  "HIGH": "HIGH",
  "MEDIUM": "MEDIUM",
  "LOW": "LOW"
};

const { UserProfile, UserInterest, Interest, UserSkill, Skill, UserImage, UserNotification, Team, TeamMember, TeamInvitation, Task, TaskComment, Image, Comment } = initSchema(schema);

export {
  UserProfile,
  UserInterest,
  Interest,
  UserSkill,
  Skill,
  UserImage,
  UserNotification,
  Team,
  TeamMember,
  TeamInvitation,
  Task,
  TaskComment,
  UserProfileVisibility,
  UserNotificationLevel,
  TeamVisibility,
  TeamType,
  TeamMemberRole,
  TeamInvitationStatus,
  TaskStatus,
  TaskPriority,
  Image,
  Comment
};