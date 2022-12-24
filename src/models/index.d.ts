import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

export enum TaskPriority {
  HIGH = "HIGH",
  MEDIUM = "MEDIUM",
  LOW = "LOW"
}

export enum TaskStatus {
  ACTIVE = "ACTIVE",
  CLOSED = "CLOSED",
  ARCHIVED = "ARCHIVED"
}

export enum UserProfileVisibility {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
  ARCHIVED = "ARCHIVED"
}

export enum TeamVisibility {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
  ARCHIVED = "ARCHIVED"
}

export enum TeamMemberStatus {
  INVITED = "INVITED",
  CONFIRMED = "CONFIRMED",
  DECLINED = "DECLINED",
  DEPARTED = "DEPARTED"
}

export enum TeamMemberRole {
  ADMINISTRATOR = "ADMINISTRATOR",
  MEMBER = "MEMBER"
}

export enum TeamType {
  TEAM = "TEAM",
  BAND = "BAND",
  GROUP = "GROUP"
}



type EagerTaskDiscussion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TaskDiscussion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly T: string;
  readonly Comment: string;
  readonly CommentDateTime: string;
  readonly CommentTeamMember: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTaskDiscussion = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TaskDiscussion, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly T: string;
  readonly Comment: string;
  readonly CommentDateTime: string;
  readonly CommentTeamMember: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TaskDiscussion = LazyLoading extends LazyLoadingDisabled ? EagerTaskDiscussion : LazyTaskDiscussion

export declare const TaskDiscussion: (new (init: ModelInit<TaskDiscussion>) => TaskDiscussion) & {
  copyOf(source: TaskDiscussion, mutator: (draft: MutableModel<TaskDiscussion>) => MutableModel<TaskDiscussion> | void): TaskDiscussion;
}

type EagerTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Team: string;
  readonly Name: string;
  readonly Description?: string | null;
  readonly OwningTeamMembers: (string | null)[];
  readonly DueDateTime?: string | null;
  readonly Status: TaskStatus | keyof typeof TaskStatus;
  readonly Priority: TaskPriority | keyof typeof TaskPriority;
  readonly CompletedByTeamMember?: string | null;
  readonly CompletedDateTime?: string | null;
  readonly TaskDiscussions?: (TaskDiscussion | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Team: string;
  readonly Name: string;
  readonly Description?: string | null;
  readonly OwningTeamMembers: (string | null)[];
  readonly DueDateTime?: string | null;
  readonly Status: TaskStatus | keyof typeof TaskStatus;
  readonly Priority: TaskPriority | keyof typeof TaskPriority;
  readonly CompletedByTeamMember?: string | null;
  readonly CompletedDateTime?: string | null;
  readonly TaskDiscussions: AsyncCollection<TaskDiscussion>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Task = LazyLoading extends LazyLoadingDisabled ? EagerTask : LazyTask

export declare const Task: (new (init: ModelInit<Task>) => Task) & {
  copyOf(source: Task, mutator: (draft: MutableModel<Task>) => MutableModel<Task> | void): Task;
}

type EagerTeamMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Team: string;
  readonly UserProfile: string;
  readonly Role: TeamMemberRole | keyof typeof TeamMemberRole;
  readonly Status: TeamMemberStatus | keyof typeof TeamMemberStatus;
  readonly InvitedDateTime: string;
  readonly InvitedByUserProfile: string;
  readonly ConfirmedDateTime?: string | null;
  readonly DeclinedDateTime?: string | null;
  readonly DepartedDateTime?: string | null;
  readonly DepartedComment?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeamMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Team: string;
  readonly UserProfile: string;
  readonly Role: TeamMemberRole | keyof typeof TeamMemberRole;
  readonly Status: TeamMemberStatus | keyof typeof TeamMemberStatus;
  readonly InvitedDateTime: string;
  readonly InvitedByUserProfile: string;
  readonly ConfirmedDateTime?: string | null;
  readonly DeclinedDateTime?: string | null;
  readonly DepartedDateTime?: string | null;
  readonly DepartedComment?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TeamMember = LazyLoading extends LazyLoadingDisabled ? EagerTeamMember : LazyTeamMember

export declare const TeamMember: (new (init: ModelInit<TeamMember>) => TeamMember) & {
  copyOf(source: TeamMember, mutator: (draft: MutableModel<TeamMember>) => MutableModel<TeamMember> | void): TeamMember;
}

type EagerTeam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Team, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly TeamType: TeamType | keyof typeof TeamType;
  readonly TeamMembers?: TeamMember[] | null;
  readonly Visibility: TeamVisibility | keyof typeof TeamVisibility;
  readonly Description: string;
  readonly Tasks?: (Task | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeam = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Team, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly TeamType: TeamType | keyof typeof TeamType;
  readonly TeamMembers: AsyncCollection<TeamMember>;
  readonly Visibility: TeamVisibility | keyof typeof TeamVisibility;
  readonly Description: string;
  readonly Tasks: AsyncCollection<Task>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Team = LazyLoading extends LazyLoadingDisabled ? EagerTeam : LazyTeam

export declare const Team: (new (init: ModelInit<Team>) => Team) & {
  copyOf(source: Team, mutator: (draft: MutableModel<Team>) => MutableModel<Team> | void): Team;
}

type EagerUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Visibility: UserProfileVisibility | keyof typeof UserProfileVisibility;
  readonly Username: string;
  readonly Name: string;
  readonly Tagline?: string | null;
  readonly Skills: (string | null)[];
  readonly Interests: (string | null)[];
  readonly About?: string | null;
  readonly Location?: string | null;
  readonly TeamMembers?: TeamMember[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserProfile = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserProfile, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Visibility: UserProfileVisibility | keyof typeof UserProfileVisibility;
  readonly Username: string;
  readonly Name: string;
  readonly Tagline?: string | null;
  readonly Skills: (string | null)[];
  readonly Interests: (string | null)[];
  readonly About?: string | null;
  readonly Location?: string | null;
  readonly TeamMembers: AsyncCollection<TeamMember>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProfile = LazyLoading extends LazyLoadingDisabled ? EagerUserProfile : LazyUserProfile

export declare const UserProfile: (new (init: ModelInit<UserProfile>) => UserProfile) & {
  copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile>) => MutableModel<UserProfile> | void): UserProfile;
}