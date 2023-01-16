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

const ProjectStatus = {
  "DRAFT": "DRAFT",
  "ACTIVE": "ACTIVE",
  "COMPLETED": "COMPLETED",
  "CANCELED": "CANCELED"
};

const ProjectMilestoneStatus = {
  "ACTIVE": "ACTIVE",
  "CLOSED": "CLOSED"
};

const RecurrenceFrequency = {
  "DAILY": "DAILY",
  "WEEKLY": "WEEKLY",
  "MONTHLY": "MONTHLY",
  "ANNUALLY": "ANNUALLY"
};

const { UserProfile, Location, UserInterest, Interest, UserSkill, Skill, UserImage, UserNotification, UserContact, Team, TeamMember, TeamInvitation, Task, TaskComment, TeamImage, TeamEvent, Event, Venue, VenueContact, TeamEventImage, TeamEventComment, TeamEventContact, TeamContact, TeamContactComment, TeamProject, TeamProjectMilestone, TeamProjectMilestoneComment, TeamProjectComment, Asset, Product, Image, Contact, Address, Comment, Expense, Recurrence } = initSchema(schema);

export {
  UserProfile,
  Location,
  UserInterest,
  Interest,
  UserSkill,
  Skill,
  UserImage,
  UserNotification,
  UserContact,
  Team,
  TeamMember,
  TeamInvitation,
  Task,
  TaskComment,
  TeamImage,
  TeamEvent,
  Event,
  Venue,
  VenueContact,
  TeamEventImage,
  TeamEventComment,
  TeamEventContact,
  TeamContact,
  TeamContactComment,
  TeamProject,
  TeamProjectMilestone,
  TeamProjectMilestoneComment,
  TeamProjectComment,
  Asset,
  Product,
  UserProfileVisibility,
  UserNotificationLevel,
  TeamVisibility,
  TeamType,
  TeamMemberRole,
  TeamInvitationStatus,
  TaskStatus,
  TaskPriority,
  ProjectStatus,
  ProjectMilestoneStatus,
  RecurrenceFrequency,
  Image,
  Contact,
  Address,
  Comment,
  Expense,
  Recurrence
};