import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

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

export enum ProjectStatus {
  DRAFT = "DRAFT",
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED"
}

export enum ProjectMilestoneStatus {
  ACTIVE = "ACTIVE",
  CLOSED = "CLOSED"
}

export enum RecurrenceFrequency {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
  ANNUALLY = "ANNUALLY"
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

type EagerContact = {
  readonly name: string;
  readonly searchString: string;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly address?: Address | null;
  readonly notes?: string | null;
  readonly searchNotes?: string | null;
}

type LazyContact = {
  readonly name: string;
  readonly searchString: string;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly address?: Address | null;
  readonly notes?: string | null;
  readonly searchNotes?: string | null;
}

export declare type Contact = LazyLoading extends LazyLoadingDisabled ? EagerContact : LazyContact

export declare const Contact: (new (init: ModelInit<Contact>) => Contact)

type EagerAddress = {
  readonly addressLine1: string;
  readonly addressLine2?: string | null;
  readonly city: string;
  readonly stateProvince: string;
  readonly country: string;
  readonly postalCode: string;
}

type LazyAddress = {
  readonly addressLine1: string;
  readonly addressLine2?: string | null;
  readonly city: string;
  readonly stateProvince: string;
  readonly country: string;
  readonly postalCode: string;
}

export declare type Address = LazyLoading extends LazyLoadingDisabled ? EagerAddress : LazyAddress

export declare const Address: (new (init: ModelInit<Address>) => Address)

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

type EagerExpense = {
  readonly name: string;
  readonly searchName: string;
  readonly description?: string | null;
  readonly searchDescription?: string | null;
  readonly notes?: string | null;
  readonly searchNotes?: string | null;
  readonly amount?: number | null;
  readonly incurredAt?: string | null;
  readonly isRecurring: boolean;
  readonly recurrence?: Recurrence | null;
}

type LazyExpense = {
  readonly name: string;
  readonly searchName: string;
  readonly description?: string | null;
  readonly searchDescription?: string | null;
  readonly notes?: string | null;
  readonly searchNotes?: string | null;
  readonly amount?: number | null;
  readonly incurredAt?: string | null;
  readonly isRecurring: boolean;
  readonly recurrence?: Recurrence | null;
}

export declare type Expense = LazyLoading extends LazyLoadingDisabled ? EagerExpense : LazyExpense

export declare const Expense: (new (init: ModelInit<Expense>) => Expense)

type EagerRecurrence = {
  readonly frequency: RecurrenceFrequency | keyof typeof RecurrenceFrequency;
  readonly periodCount: number;
  readonly isMonday: boolean;
  readonly isTuesday: boolean;
  readonly isWednesday: boolean;
  readonly isThursday: boolean;
  readonly isFriday: boolean;
  readonly isSaturday: boolean;
  readonly isSunday: boolean;
}

type LazyRecurrence = {
  readonly frequency: RecurrenceFrequency | keyof typeof RecurrenceFrequency;
  readonly periodCount: number;
  readonly isMonday: boolean;
  readonly isTuesday: boolean;
  readonly isWednesday: boolean;
  readonly isThursday: boolean;
  readonly isFriday: boolean;
  readonly isSaturday: boolean;
  readonly isSunday: boolean;
}

export declare type Recurrence = LazyLoading extends LazyLoadingDisabled ? EagerRecurrence : LazyRecurrence

export declare const Recurrence: (new (init: ModelInit<Recurrence>) => Recurrence)

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
  readonly Location?: Location | null;
  readonly UserInterests?: (UserInterest | null)[] | null;
  readonly UserSkills?: (UserSkill | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userProfileLocationId?: string | null;
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
  readonly Location: AsyncItem<Location | undefined>;
  readonly UserInterests: AsyncCollection<UserInterest>;
  readonly UserSkills: AsyncCollection<UserSkill>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly userProfileLocationId?: string | null;
}

export declare type UserProfile = LazyLoading extends LazyLoadingDisabled ? EagerUserProfile : LazyUserProfile

export declare const UserProfile: (new (init: ModelInit<UserProfile>) => UserProfile) & {
  copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile>) => MutableModel<UserProfile> | void): UserProfile;
}

type EagerLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Location, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly searchName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Location, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly searchName: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location) & {
  copyOf(source: Location, mutator: (draft: MutableModel<Location>) => MutableModel<Location> | void): Location;
}

type EagerUserInterest = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserInterest, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userprofileID: string;
  readonly Interest: Interest;
  readonly UserProfile?: UserProfile | null;
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
  readonly userprofileID: string;
  readonly Interest: AsyncItem<Interest>;
  readonly UserProfile: AsyncItem<UserProfile | undefined>;
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
  readonly userprofileID: string;
  readonly Skill: Skill;
  readonly UserProfile?: UserProfile | null;
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
  readonly userprofileID: string;
  readonly Skill: AsyncItem<Skill>;
  readonly UserProfile: AsyncItem<UserProfile | undefined>;
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

type EagerUserContact = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserContact, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly contact: Contact;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserContact = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserContact, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly contact: Contact;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserContact = LazyLoading extends LazyLoadingDisabled ? EagerUserContact : LazyUserContact

export declare const UserContact: (new (init: ModelInit<UserContact>) => UserContact) & {
  copyOf(source: UserContact, mutator: (draft: MutableModel<UserContact>) => MutableModel<UserContact> | void): UserContact;
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
  readonly TeamMembers?: TeamMember[] | null;
  readonly TeamInvitations?: (TeamInvitation | null)[] | null;
  readonly Tasks?: (Task | null)[] | null;
  readonly TeamImages?: (TeamImage | null)[] | null;
  readonly TeamContacts?: (TeamContact | null)[] | null;
  readonly TeamEvents?: (TeamEvent | null)[] | null;
  readonly TeamProjects?: (TeamProject | null)[] | null;
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
  readonly TeamMembers: AsyncCollection<TeamMember>;
  readonly TeamInvitations: AsyncCollection<TeamInvitation>;
  readonly Tasks: AsyncCollection<Task>;
  readonly TeamImages: AsyncCollection<TeamImage>;
  readonly TeamContacts: AsyncCollection<TeamContact>;
  readonly TeamEvents: AsyncCollection<TeamEvent>;
  readonly TeamProjects: AsyncCollection<TeamProject>;
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
  readonly teamID: string;
  readonly username: string;
  readonly role: TeamMemberRole | keyof typeof TeamMemberRole;
  readonly Team?: Team | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeamMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamID: string;
  readonly username: string;
  readonly role: TeamMemberRole | keyof typeof TeamMemberRole;
  readonly Team: AsyncItem<Team | undefined>;
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
  readonly teamID: string;
  readonly role: TeamMemberRole | keyof typeof TeamMemberRole;
  readonly status: TeamInvitationStatus | keyof typeof TeamInvitationStatus;
  readonly username: string;
  readonly externalEmail?: string | null;
  readonly invitedByUsername?: string | null;
  readonly responseDateTime?: string | null;
  readonly responseComment?: string | null;
  readonly Team?: Team | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeamInvitation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamInvitation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamID: string;
  readonly role: TeamMemberRole | keyof typeof TeamMemberRole;
  readonly status: TeamInvitationStatus | keyof typeof TeamInvitationStatus;
  readonly username: string;
  readonly externalEmail?: string | null;
  readonly invitedByUsername?: string | null;
  readonly responseDateTime?: string | null;
  readonly responseComment?: string | null;
  readonly Team: AsyncItem<Team | undefined>;
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
  readonly teamID: string;
  readonly name: string;
  readonly searchName: string;
  readonly description?: string | null;
  readonly searchDescription?: string | null;
  readonly dueDate?: string | null;
  readonly status: TaskStatus | keyof typeof TaskStatus;
  readonly priority: TaskPriority | keyof typeof TaskPriority;
  readonly completedByUsername?: string | null;
  readonly completedDate?: string | null;
  readonly TaskComments?: (TaskComment | null)[] | null;
  readonly ownerUsername?: string | null;
  readonly startDate?: string | null;
  readonly Team?: Team | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTask = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Task, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamID: string;
  readonly name: string;
  readonly searchName: string;
  readonly description?: string | null;
  readonly searchDescription?: string | null;
  readonly dueDate?: string | null;
  readonly status: TaskStatus | keyof typeof TaskStatus;
  readonly priority: TaskPriority | keyof typeof TaskPriority;
  readonly completedByUsername?: string | null;
  readonly completedDate?: string | null;
  readonly TaskComments: AsyncCollection<TaskComment>;
  readonly ownerUsername?: string | null;
  readonly startDate?: string | null;
  readonly Team: AsyncItem<Team | undefined>;
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
  readonly taskID: string;
  readonly comment: Comment;
  readonly Task?: Task | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTaskComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TaskComment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly taskID: string;
  readonly comment: Comment;
  readonly Task: AsyncItem<Task | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TaskComment = LazyLoading extends LazyLoadingDisabled ? EagerTaskComment : LazyTaskComment

export declare const TaskComment: (new (init: ModelInit<TaskComment>) => TaskComment) & {
  copyOf(source: TaskComment, mutator: (draft: MutableModel<TaskComment>) => MutableModel<TaskComment> | void): TaskComment;
}

type EagerTeamImage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamImage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamID: string;
  readonly image: Image;
  readonly Team?: Team | null;
  readonly TeamEvent?: TeamEvent | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamImageTeamEventId?: string | null;
}

type LazyTeamImage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamImage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamID: string;
  readonly image: Image;
  readonly Team: AsyncItem<Team | undefined>;
  readonly TeamEvent: AsyncItem<TeamEvent | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamImageTeamEventId?: string | null;
}

export declare type TeamImage = LazyLoading extends LazyLoadingDisabled ? EagerTeamImage : LazyTeamImage

export declare const TeamImage: (new (init: ModelInit<TeamImage>) => TeamImage) & {
  copyOf(source: TeamImage, mutator: (draft: MutableModel<TeamImage>) => MutableModel<TeamImage> | void): TeamImage;
}

type EagerTeamEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamEvent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamID: string;
  readonly name: string;
  readonly searchName: string;
  readonly description?: string | null;
  readonly searchDescription?: string | null;
  readonly event?: Event | null;
  readonly Team?: Team | null;
  readonly TeamEventImages?: (TeamEventImage | null)[] | null;
  readonly TeamEventComments?: (TeamEventComment | null)[] | null;
  readonly TeamEventContacts?: (TeamEventContact | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamEventEventId?: string | null;
}

type LazyTeamEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamEvent, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamID: string;
  readonly name: string;
  readonly searchName: string;
  readonly description?: string | null;
  readonly searchDescription?: string | null;
  readonly event: AsyncItem<Event | undefined>;
  readonly Team: AsyncItem<Team | undefined>;
  readonly TeamEventImages: AsyncCollection<TeamEventImage>;
  readonly TeamEventComments: AsyncCollection<TeamEventComment>;
  readonly TeamEventContacts: AsyncCollection<TeamEventContact>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamEventEventId?: string | null;
}

export declare type TeamEvent = LazyLoading extends LazyLoadingDisabled ? EagerTeamEvent : LazyTeamEvent

export declare const TeamEvent: (new (init: ModelInit<TeamEvent>) => TeamEvent) & {
  copyOf(source: TeamEvent, mutator: (draft: MutableModel<TeamEvent>) => MutableModel<TeamEvent> | void): TeamEvent;
}

type EagerEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly searchName: string;
  readonly venue?: Venue | null;
  readonly date?: string | null;
  readonly time?: string | null;
  readonly description?: string | null;
  readonly searchDescription?: string | null;
  readonly website?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly eventVenueId?: string | null;
}

type LazyEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly searchName: string;
  readonly venue: AsyncItem<Venue | undefined>;
  readonly date?: string | null;
  readonly time?: string | null;
  readonly description?: string | null;
  readonly searchDescription?: string | null;
  readonly website?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly eventVenueId?: string | null;
}

export declare type Event = LazyLoading extends LazyLoadingDisabled ? EagerEvent : LazyEvent

export declare const Event: (new (init: ModelInit<Event>) => Event) & {
  copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}

type EagerVenue = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Venue, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly searchName: string;
  readonly address?: Address | null;
  readonly website?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly VenueContacts?: (VenueContact | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVenue = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Venue, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly searchName: string;
  readonly address?: Address | null;
  readonly website?: string | null;
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly VenueContacts: AsyncCollection<VenueContact>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Venue = LazyLoading extends LazyLoadingDisabled ? EagerVenue : LazyVenue

export declare const Venue: (new (init: ModelInit<Venue>) => Venue) & {
  copyOf(source: Venue, mutator: (draft: MutableModel<Venue>) => MutableModel<Venue> | void): Venue;
}

type EagerVenueContact = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VenueContact, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly venueID: string;
  readonly contact: Contact;
  readonly Venue?: Venue | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVenueContact = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VenueContact, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly venueID: string;
  readonly contact: Contact;
  readonly Venue: AsyncItem<Venue | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VenueContact = LazyLoading extends LazyLoadingDisabled ? EagerVenueContact : LazyVenueContact

export declare const VenueContact: (new (init: ModelInit<VenueContact>) => VenueContact) & {
  copyOf(source: VenueContact, mutator: (draft: MutableModel<VenueContact>) => MutableModel<VenueContact> | void): VenueContact;
}

type EagerTeamEventImage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamEventImage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teameventID: string;
  readonly teamImage?: TeamImage | null;
  readonly TeamEvent?: TeamEvent | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamEventImageTeamImageId?: string | null;
}

type LazyTeamEventImage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamEventImage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teameventID: string;
  readonly teamImage: AsyncItem<TeamImage | undefined>;
  readonly TeamEvent: AsyncItem<TeamEvent | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamEventImageTeamImageId?: string | null;
}

export declare type TeamEventImage = LazyLoading extends LazyLoadingDisabled ? EagerTeamEventImage : LazyTeamEventImage

export declare const TeamEventImage: (new (init: ModelInit<TeamEventImage>) => TeamEventImage) & {
  copyOf(source: TeamEventImage, mutator: (draft: MutableModel<TeamEventImage>) => MutableModel<TeamEventImage> | void): TeamEventImage;
}

type EagerTeamEventComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamEventComment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teameventID: string;
  readonly comment: Comment;
  readonly TeamEvent?: TeamEvent | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeamEventComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamEventComment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teameventID: string;
  readonly comment: Comment;
  readonly TeamEvent: AsyncItem<TeamEvent | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TeamEventComment = LazyLoading extends LazyLoadingDisabled ? EagerTeamEventComment : LazyTeamEventComment

export declare const TeamEventComment: (new (init: ModelInit<TeamEventComment>) => TeamEventComment) & {
  copyOf(source: TeamEventComment, mutator: (draft: MutableModel<TeamEventComment>) => MutableModel<TeamEventComment> | void): TeamEventComment;
}

type EagerTeamEventContact = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamEventContact, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teameventID: string;
  readonly contact: Contact;
  readonly TeamEvent?: TeamEvent | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeamEventContact = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamEventContact, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teameventID: string;
  readonly contact: Contact;
  readonly TeamEvent: AsyncItem<TeamEvent | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TeamEventContact = LazyLoading extends LazyLoadingDisabled ? EagerTeamEventContact : LazyTeamEventContact

export declare const TeamEventContact: (new (init: ModelInit<TeamEventContact>) => TeamEventContact) & {
  copyOf(source: TeamEventContact, mutator: (draft: MutableModel<TeamEventContact>) => MutableModel<TeamEventContact> | void): TeamEventContact;
}

type EagerTeamContact = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamContact, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamID: string;
  readonly contact: Contact;
  readonly Team?: Team | null;
  readonly TeamContactComments?: (TeamContactComment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeamContact = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamContact, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamID: string;
  readonly contact: Contact;
  readonly Team: AsyncItem<Team | undefined>;
  readonly TeamContactComments: AsyncCollection<TeamContactComment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TeamContact = LazyLoading extends LazyLoadingDisabled ? EagerTeamContact : LazyTeamContact

export declare const TeamContact: (new (init: ModelInit<TeamContact>) => TeamContact) & {
  copyOf(source: TeamContact, mutator: (draft: MutableModel<TeamContact>) => MutableModel<TeamContact> | void): TeamContact;
}

type EagerTeamContactComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamContactComment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamContactID: string;
  readonly comment: Comment;
  readonly TeamContact?: TeamContact | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeamContactComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamContactComment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamContactID: string;
  readonly comment: Comment;
  readonly TeamContact: AsyncItem<TeamContact | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TeamContactComment = LazyLoading extends LazyLoadingDisabled ? EagerTeamContactComment : LazyTeamContactComment

export declare const TeamContactComment: (new (init: ModelInit<TeamContactComment>) => TeamContactComment) & {
  copyOf(source: TeamContactComment, mutator: (draft: MutableModel<TeamContactComment>) => MutableModel<TeamContactComment> | void): TeamContactComment;
}

type EagerTeamProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamProject, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamID: string;
  readonly name: string;
  readonly searchName: string;
  readonly description?: string | null;
  readonly searchDescription?: string | null;
  readonly status: ProjectStatus | keyof typeof ProjectStatus;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly Team?: Team | null;
  readonly TeamProjectMilestones?: (TeamProjectMilestone | null)[] | null;
  readonly TeamProjectComments?: (TeamProjectComment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeamProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamProject, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamID: string;
  readonly name: string;
  readonly searchName: string;
  readonly description?: string | null;
  readonly searchDescription?: string | null;
  readonly status: ProjectStatus | keyof typeof ProjectStatus;
  readonly startDate?: string | null;
  readonly endDate?: string | null;
  readonly Team: AsyncItem<Team | undefined>;
  readonly TeamProjectMilestones: AsyncCollection<TeamProjectMilestone>;
  readonly TeamProjectComments: AsyncCollection<TeamProjectComment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TeamProject = LazyLoading extends LazyLoadingDisabled ? EagerTeamProject : LazyTeamProject

export declare const TeamProject: (new (init: ModelInit<TeamProject>) => TeamProject) & {
  copyOf(source: TeamProject, mutator: (draft: MutableModel<TeamProject>) => MutableModel<TeamProject> | void): TeamProject;
}

type EagerTeamProjectMilestone = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamProjectMilestone, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamprojectID: string;
  readonly name: string;
  readonly searchName: string;
  readonly description?: string | null;
  readonly searchDescription?: string | null;
  readonly status: ProjectMilestoneStatus | keyof typeof ProjectMilestoneStatus;
  readonly date?: string | null;
  readonly TeamProject?: TeamProject | null;
  readonly TeamProjectMilestoneComments?: (TeamProjectMilestoneComment | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeamProjectMilestone = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamProjectMilestone, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamprojectID: string;
  readonly name: string;
  readonly searchName: string;
  readonly description?: string | null;
  readonly searchDescription?: string | null;
  readonly status: ProjectMilestoneStatus | keyof typeof ProjectMilestoneStatus;
  readonly date?: string | null;
  readonly TeamProject: AsyncItem<TeamProject | undefined>;
  readonly TeamProjectMilestoneComments: AsyncCollection<TeamProjectMilestoneComment>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TeamProjectMilestone = LazyLoading extends LazyLoadingDisabled ? EagerTeamProjectMilestone : LazyTeamProjectMilestone

export declare const TeamProjectMilestone: (new (init: ModelInit<TeamProjectMilestone>) => TeamProjectMilestone) & {
  copyOf(source: TeamProjectMilestone, mutator: (draft: MutableModel<TeamProjectMilestone>) => MutableModel<TeamProjectMilestone> | void): TeamProjectMilestone;
}

type EagerTeamProjectMilestoneComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamProjectMilestoneComment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamprojectmilestoneID: string;
  readonly comment: Comment;
  readonly TeamProjectMilestone?: TeamProjectMilestone | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeamProjectMilestoneComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamProjectMilestoneComment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamprojectmilestoneID: string;
  readonly comment: Comment;
  readonly TeamProjectMilestone: AsyncItem<TeamProjectMilestone | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TeamProjectMilestoneComment = LazyLoading extends LazyLoadingDisabled ? EagerTeamProjectMilestoneComment : LazyTeamProjectMilestoneComment

export declare const TeamProjectMilestoneComment: (new (init: ModelInit<TeamProjectMilestoneComment>) => TeamProjectMilestoneComment) & {
  copyOf(source: TeamProjectMilestoneComment, mutator: (draft: MutableModel<TeamProjectMilestoneComment>) => MutableModel<TeamProjectMilestoneComment> | void): TeamProjectMilestoneComment;
}

type EagerTeamProjectComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamProjectComment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamprojectID: string;
  readonly comment: Comment;
  readonly TeamProject?: TeamProject | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTeamProjectComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamProjectComment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly teamprojectID: string;
  readonly comment: Comment;
  readonly TeamProject: AsyncItem<TeamProject | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TeamProjectComment = LazyLoading extends LazyLoadingDisabled ? EagerTeamProjectComment : LazyTeamProjectComment

export declare const TeamProjectComment: (new (init: ModelInit<TeamProjectComment>) => TeamProjectComment) & {
  copyOf(source: TeamProjectComment, mutator: (draft: MutableModel<TeamProjectComment>) => MutableModel<TeamProjectComment> | void): TeamProjectComment;
}

type EagerAsset = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Asset, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly searchName: string;
  readonly description?: string | null;
  readonly searchDescription?: string | null;
  readonly notes?: string | null;
  readonly searchNotes?: string | null;
  readonly product?: Product | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly assetProductId?: string | null;
}

type LazyAsset = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Asset, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly searchName: string;
  readonly description?: string | null;
  readonly searchDescription?: string | null;
  readonly notes?: string | null;
  readonly searchNotes?: string | null;
  readonly product: AsyncItem<Product | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly assetProductId?: string | null;
}

export declare type Asset = LazyLoading extends LazyLoadingDisabled ? EagerAsset : LazyAsset

export declare const Asset: (new (init: ModelInit<Asset>) => Asset) & {
  copyOf(source: Asset, mutator: (draft: MutableModel<Asset>) => MutableModel<Asset> | void): Asset;
}

type EagerProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly searchString: string;
  readonly description?: string | null;
  readonly searchDescription?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProduct = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Product, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly searchString: string;
  readonly description?: string | null;
  readonly searchDescription?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Product = LazyLoading extends LazyLoadingDisabled ? EagerProduct : LazyProduct

export declare const Product: (new (init: ModelInit<Product>) => Product) & {
  copyOf(source: Product, mutator: (draft: MutableModel<Product>) => MutableModel<Product> | void): Product;
}