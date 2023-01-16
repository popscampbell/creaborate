import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum UserProfileVisibility {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
  ARCHIVED = "ARCHIVED"
}

export enum UserNotificationLevel {
  NORMAL = "NORMAL",
  INFO = "INFO",
  SUCCESS = "SUCCESS",
  WARNING = "WARNING",
  ERROR = "ERROR"
}

export enum TeamVisibility {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
  ARCHIVED = "ARCHIVED"
}

export enum TeamType {
  TEAM = "TEAM",
  BAND = "BAND",
  GROUP = "GROUP",
  CUSTOM = "CUSTOM"
}

export enum TeamMemberRole {
  ADMINISTRATOR = "ADMINISTRATOR",
  MEMBER = "MEMBER"
}

export enum TeamInvitationStatus {
  SENT = "SENT",
  ACCEPTED = "ACCEPTED",
  DECLINED = "DECLINED",
  EXPIRED = "EXPIRED"
}

export enum TaskStatus {
  ACTIVE = "ACTIVE",
  CLOSED = "CLOSED",
  ARCHIVED = "ARCHIVED"
}

export enum TaskPriority {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW"
}

type EagerImage = {
  readonly storageKey: string;
  readonly alt: string;
  readonly searchAlt: string;
  readonly caption?: string | null;
  readonly searchCaption?: string | null;
  readonly detail?: string | null;
  readonly searchDetail?: string | null;
}

type LazyImage = {
  readonly storageKey: string;
  readonly alt: string;
  readonly searchAlt: string;
  readonly caption?: string | null;
  readonly searchCaption?: string | null;
  readonly detail?: string | null;
  readonly searchDetail?: string | null;
}

export declare type Image = LazyLoading extends LazyLoadingDisabled ? EagerImage : LazyImage

export declare const Image: (new (init: ModelInit<Image>) => Image)

type EagerComment = {
  readonly comment: string;
  readonly searchComment: string;
  readonly postedByUsername: string;
}

type LazyComment = {
  readonly comment: string;
  readonly searchComment: string;
  readonly postedByUsername: string;
}

export declare type Comment = LazyLoading extends LazyLoadingDisabled ? EagerComment : LazyComment

export declare const Comment: (new (init: ModelInit<Comment>) => Comment)

type EagerUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly visibility: UserProfileVisibility | keyof typeof UserProfileVisibility;
  readonly name: string;
  readonly searchName: string;
  readonly profileImage?: Image | null;
  readonly tagline?: string | null;
  readonly about?: string | null;
  readonly interests?: (UserInterest | null)[] | null;
  readonly skills?: (UserSkill | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly visibility: UserProfileVisibility | keyof typeof UserProfileVisibility;
  readonly name: string;
  readonly searchName: string;
  readonly profileImage?: Image | null;
  readonly tagline?: string | null;
  readonly about?: string | null;
  readonly interests: AsyncCollection<UserInterest>;
  readonly skills: AsyncCollection<UserSkill>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProfile = LazyLoading extends LazyLoadingDisabled ? EagerUserProfile : LazyUserProfile

export declare const UserProfile: (new (init: ModelInit<UserProfile>) => UserProfile) & {
  copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile>) => MutableModel<UserProfile> | void): UserProfile;
}

type EagerUserInterest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserInterest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userProfileId: string;
  readonly interest: Interest;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userInterestInterestId: string;
}

type LazyUserInterest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserInterest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userProfileId: string;
  readonly interest: AsyncItem<Interest>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userInterestInterestId: string;
}

export declare type UserInterest = LazyLoading extends LazyLoadingDisabled ? EagerUserInterest : LazyUserInterest

export declare const UserInterest: (new (init: ModelInit<UserInterest>) => UserInterest) & {
  copyOf(source: UserInterest, mutator: (draft: MutableModel<UserInterest>) => MutableModel<UserInterest> | void): UserInterest;
}

type EagerInterest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Interest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly searchName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyInterest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Interest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly searchName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Interest = LazyLoading extends LazyLoadingDisabled ? EagerInterest : LazyInterest

export declare const Interest: (new (init: ModelInit<Interest>) => Interest) & {
  copyOf(source: Interest, mutator: (draft: MutableModel<Interest>) => MutableModel<Interest> | void): Interest;
}

type EagerUserSkill = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserSkill, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userProfileId: string;
  readonly skill: Skill;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userSkillSkillId: string;
}

type LazyUserSkill = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserSkill, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userProfileId: string;
  readonly skill: AsyncItem<Skill>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userSkillSkillId: string;
}

export declare type UserSkill = LazyLoading extends LazyLoadingDisabled ? EagerUserSkill : LazyUserSkill

export declare const UserSkill: (new (init: ModelInit<UserSkill>) => UserSkill) & {
  copyOf(source: UserSkill, mutator: (draft: MutableModel<UserSkill>) => MutableModel<UserSkill> | void): UserSkill;
}

type EagerSkill = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Skill, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly searchName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazySkill = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Skill, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly searchName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Skill = LazyLoading extends LazyLoadingDisabled ? EagerSkill : LazySkill

export declare const Skill: (new (init: ModelInit<Skill>) => Skill) & {
  copyOf(source: Skill, mutator: (draft: MutableModel<Skill>) => MutableModel<Skill> | void): Skill;
}

type EagerUserImage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserImage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly image: Image;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserImage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserImage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly image: Image;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserImage = LazyLoading extends LazyLoadingDisabled ? EagerUserImage : LazyUserImage

export declare const UserImage: (new (init: ModelInit<UserImage>) => UserImage) & {
  copyOf(source: UserImage, mutator: (draft: MutableModel<UserImage>) => MutableModel<UserImage> | void): UserImage;
}

type EagerUserNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserNotification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly message: string;
  readonly level: UserNotificationLevel | keyof typeof UserNotificationLevel;
  readonly displayedAt?: string | null;
  readonly heading?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserNotification, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly message: string;
  readonly level: UserNotificationLevel | keyof typeof UserNotificationLevel;
  readonly displayedAt?: string | null;
  readonly heading?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserNotification = LazyLoading extends LazyLoadingDisabled ? EagerUserNotification : LazyUserNotification

export declare const UserNotification: (new (init: ModelInit<UserNotification>) => UserNotification) & {
  copyOf(source: UserNotification, mutator: (draft: MutableModel<UserNotification>) => MutableModel<UserNotification> | void): UserNotification;
}

type EagerTeam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Team, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly searchName: string;
  readonly visibility: TeamVisibility | keyof typeof TeamVisibility;
  readonly teamType: TeamType | keyof typeof TeamType;
  readonly customTeamType?: string | null;
  readonly description: string;
  readonly teamMembers?: TeamMember[] | null;
  readonly invitations?: (TeamInvitation | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Team, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly searchName: string;
  readonly visibility: TeamVisibility | keyof typeof TeamVisibility;
  readonly teamType: TeamType | keyof typeof TeamType;
  readonly customTeamType?: string | null;
  readonly description: string;
  readonly teamMembers: AsyncCollection<TeamMember>;
  readonly invitations: AsyncCollection<TeamInvitation>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Team = LazyLoading extends LazyLoadingDisabled ? EagerTeam : LazyTeam

export declare const Team: (new (init: ModelInit<Team>) => Team) & {
  copyOf(source: Team, mutator: (draft: MutableModel<Team>) => MutableModel<Team> | void): Team;
}

type EagerTeamMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamId: string;
  readonly username: string;
  readonly role: TeamMemberRole | keyof typeof TeamMemberRole;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeamMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamId: string;
  readonly username: string;
  readonly role: TeamMemberRole | keyof typeof TeamMemberRole;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TeamMember = LazyLoading extends LazyLoadingDisabled ? EagerTeamMember : LazyTeamMember

export declare const TeamMember: (new (init: ModelInit<TeamMember>) => TeamMember) & {
  copyOf(source: TeamMember, mutator: (draft: MutableModel<TeamMember>) => MutableModel<TeamMember> | void): TeamMember;
}

type EagerTeamInvitation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamInvitation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamId: string;
  readonly role: TeamMemberRole | keyof typeof TeamMemberRole;
  readonly status: TeamInvitationStatus | keyof typeof TeamInvitationStatus;
  readonly username: string;
  readonly externalEmail?: string | null;
  readonly invitedByUsername?: string | null;
  readonly responseDateTime?: string | null;
  readonly responseComment?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeamInvitation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamInvitation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamId: string;
  readonly role: TeamMemberRole | keyof typeof TeamMemberRole;
  readonly status: TeamInvitationStatus | keyof typeof TeamInvitationStatus;
  readonly username: string;
  readonly externalEmail?: string | null;
  readonly invitedByUsername?: string | null;
  readonly responseDateTime?: string | null;
  readonly responseComment?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TeamInvitation = LazyLoading extends LazyLoadingDisabled ? EagerTeamInvitation : LazyTeamInvitation

export declare const TeamInvitation: (new (init: ModelInit<TeamInvitation>) => TeamInvitation) & {
  copyOf(source: TeamInvitation, mutator: (draft: MutableModel<TeamInvitation>) => MutableModel<TeamInvitation> | void): TeamInvitation;
}

type EagerTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamId: string;
  readonly name: string;
  readonly searchName: string;
  readonly description?: string | null;
  readonly searchDescription?: string | null;
  readonly dueDate?: string | null;
  readonly status: TaskStatus | keyof typeof TaskStatus;
  readonly priority: TaskPriority | keyof typeof TaskPriority;
  readonly completedByUsername?: string | null;
  readonly completedDate?: string | null;
  readonly comments?: (TaskComment | null)[] | null;
  readonly ownerUsername?: string | null;
  readonly startDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamId: string;
  readonly name: string;
  readonly searchName: string;
  readonly description?: string | null;
  readonly searchDescription?: string | null;
  readonly dueDate?: string | null;
  readonly status: TaskStatus | keyof typeof TaskStatus;
  readonly priority: TaskPriority | keyof typeof TaskPriority;
  readonly completedByUsername?: string | null;
  readonly completedDate?: string | null;
  readonly comments: AsyncCollection<TaskComment>;
  readonly ownerUsername?: string | null;
  readonly startDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Task = LazyLoading extends LazyLoadingDisabled ? EagerTask : LazyTask

export declare const Task: (new (init: ModelInit<Task>) => Task) & {
  copyOf(source: Task, mutator: (draft: MutableModel<Task>) => MutableModel<Task> | void): Task;
}

type EagerTaskComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TaskComment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly taskId: string;
  readonly comment: Comment;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTaskComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TaskComment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly taskId: string;
  readonly comment: Comment;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TaskComment = LazyLoading extends LazyLoadingDisabled ? EagerTaskComment : LazyTaskComment

export declare const TaskComment: (new (init: ModelInit<TaskComment>) => TaskComment) & {
  copyOf(source: TaskComment, mutator: (draft: MutableModel<TaskComment>) => MutableModel<TaskComment> | void): TaskComment;
}