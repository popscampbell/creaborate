import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum RecurrenceFrequency {
  DAILY = "DAILY",
  WEEKLY = "WEEKLY",
  MONTHLY = "MONTHLY",
  ANNULLY = "ANNULLY"
}

export enum ProjectMilestoneStatus {
  ACTIVE = "ACTIVE",
  CLOSED = "CLOSED"
}

export enum ProjectStatus {
  DRAFT = "DRAFT",
  ACTIVE = "ACTIVE",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED"
}

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

export enum TeamMemberRole {
  ADMINISTRATOR = "ADMINISTRATOR",
  MEMBER = "MEMBER"
}

export enum TeamMemberStatus {
  INVITED = "INVITED",
  CONFIRMED = "CONFIRMED",
  DECLINED = "DECLINED",
  DEPARTED = "DEPARTED"
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

export enum TeamType {
  TEAM = "TEAM",
  BAND = "BAND",
  GROUP = "GROUP"
}

type EagerRecurrence = {
  readonly Frequency: RecurrenceFrequency | keyof typeof RecurrenceFrequency;
  readonly PeriodCount: number;
  readonly IsMonday: boolean;
  readonly IsTuesday: boolean;
  readonly IsWednesday: boolean;
  readonly IsThursday: boolean;
  readonly IsFriday: boolean;
  readonly IsSaturday: boolean;
  readonly IsSunday: boolean;
}

type LazyRecurrence = {
  readonly Frequency: RecurrenceFrequency | keyof typeof RecurrenceFrequency;
  readonly PeriodCount: number;
  readonly IsMonday: boolean;
  readonly IsTuesday: boolean;
  readonly IsWednesday: boolean;
  readonly IsThursday: boolean;
  readonly IsFriday: boolean;
  readonly IsSaturday: boolean;
  readonly IsSunday: boolean;
}

export declare type Recurrence = LazyLoading extends LazyLoadingDisabled ? EagerRecurrence : LazyRecurrence

export declare const Recurrence: (new (init: ModelInit<Recurrence>) => Recurrence)

type EagerEventImage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EventImage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Event: string;
  readonly Image: Image;
  readonly IsPrimary: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly eventImageImageId: string;
}

type LazyEventImage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<EventImage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Event: string;
  readonly Image: AsyncItem<Image>;
  readonly IsPrimary: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly eventImageImageId: string;
}

export declare type EventImage = LazyLoading extends LazyLoadingDisabled ? EagerEventImage : LazyEventImage

export declare const EventImage: (new (init: ModelInit<EventImage>) => EventImage) & {
  copyOf(source: EventImage, mutator: (draft: MutableModel<EventImage>) => MutableModel<EventImage> | void): EventImage;
}

type EagerImage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Image, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly File: string;
  readonly Caption?: string | null;
  readonly Detail?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyImage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Image, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly File: string;
  readonly Caption?: string | null;
  readonly Detail?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Image = LazyLoading extends LazyLoadingDisabled ? EagerImage : LazyImage

export declare const Image: (new (init: ModelInit<Image>) => Image) & {
  copyOf(source: Image, mutator: (draft: MutableModel<Image>) => MutableModel<Image> | void): Image;
}

type EagerAssetImage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AssetImage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Asset: string;
  readonly Image: Image;
  readonly IsPrimary: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly assetImageImageId: string;
}

type LazyAssetImage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<AssetImage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Asset: string;
  readonly Image: AsyncItem<Image>;
  readonly IsPrimary: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly assetImageImageId: string;
}

export declare type AssetImage = LazyLoading extends LazyLoadingDisabled ? EagerAssetImage : LazyAssetImage

export declare const AssetImage: (new (init: ModelInit<AssetImage>) => AssetImage) & {
  copyOf(source: AssetImage, mutator: (draft: MutableModel<AssetImage>) => MutableModel<AssetImage> | void): AssetImage;
}

type EagerLocationImage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LocationImage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Image: Image;
  readonly Location: string;
  readonly IsPrimary: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly locationImageImageId: string;
}

type LazyLocationImage = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LocationImage, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Image: AsyncItem<Image>;
  readonly Location: string;
  readonly IsPrimary: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly locationImageImageId: string;
}

export declare type LocationImage = LazyLoading extends LazyLoadingDisabled ? EagerLocationImage : LazyLocationImage

export declare const LocationImage: (new (init: ModelInit<LocationImage>) => LocationImage) & {
  copyOf(source: LocationImage, mutator: (draft: MutableModel<LocationImage>) => MutableModel<LocationImage> | void): LocationImage;
}

type EagerAsset = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Asset, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly AssetImages?: (AssetImage | null)[] | null;
  readonly Description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAsset = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Asset, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly AssetImages: AsyncCollection<AssetImage>;
  readonly Description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Asset = LazyLoading extends LazyLoadingDisabled ? EagerAsset : LazyAsset

export declare const Asset: (new (init: ModelInit<Asset>) => Asset) & {
  copyOf(source: Asset, mutator: (draft: MutableModel<Asset>) => MutableModel<Asset> | void): Asset;
}

type EagerExpense = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Expense, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Description?: string | null;
  readonly Amount?: number | null;
  readonly IncurredDate?: string | null;
  readonly IsRecurring: boolean;
  readonly Recurrence?: Recurrence | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyExpense = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Expense, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Description?: string | null;
  readonly Amount?: number | null;
  readonly IncurredDate?: string | null;
  readonly IsRecurring: boolean;
  readonly Recurrence?: Recurrence | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Expense = LazyLoading extends LazyLoadingDisabled ? EagerExpense : LazyExpense

export declare const Expense: (new (init: ModelInit<Expense>) => Expense) & {
  copyOf(source: Expense, mutator: (draft: MutableModel<Expense>) => MutableModel<Expense> | void): Expense;
}

type EagerLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Location, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Address?: string | null;
  readonly Website?: string | null;
  readonly Phone?: string | null;
  readonly ContactEmail?: string | null;
  readonly ContactName?: string | null;
  readonly LocationImages?: (LocationImage | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLocation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Location, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Address?: string | null;
  readonly Website?: string | null;
  readonly Phone?: string | null;
  readonly ContactEmail?: string | null;
  readonly ContactName?: string | null;
  readonly LocationImages: AsyncCollection<LocationImage>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location) & {
  copyOf(source: Location, mutator: (draft: MutableModel<Location>) => MutableModel<Location> | void): Location;
}

type EagerEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Team: string;
  readonly Name: string;
  readonly Date?: string | null;
  readonly Time?: string | null;
  readonly Location?: Location | null;
  readonly Description?: string | null;
  readonly Website?: string | null;
  readonly EventImages?: (EventImage | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly eventLocationId?: string | null;
}

type LazyEvent = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Event, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Team: string;
  readonly Name: string;
  readonly Date?: string | null;
  readonly Time?: string | null;
  readonly Location: AsyncItem<Location | undefined>;
  readonly Description?: string | null;
  readonly Website?: string | null;
  readonly EventImages: AsyncCollection<EventImage>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly eventLocationId?: string | null;
}

export declare type Event = LazyLoading extends LazyLoadingDisabled ? EagerEvent : LazyEvent

export declare const Event: (new (init: ModelInit<Event>) => Event) & {
  copyOf(source: Event, mutator: (draft: MutableModel<Event>) => MutableModel<Event> | void): Event;
}

type EagerProjectMilestone = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProjectMilestone, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Project: string;
  readonly Name: string;
  readonly Status: ProjectMilestoneStatus | keyof typeof ProjectMilestoneStatus;
  readonly Date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProjectMilestone = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ProjectMilestone, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Project: string;
  readonly Name: string;
  readonly Status: ProjectMilestoneStatus | keyof typeof ProjectMilestoneStatus;
  readonly Date?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ProjectMilestone = LazyLoading extends LazyLoadingDisabled ? EagerProjectMilestone : LazyProjectMilestone

export declare const ProjectMilestone: (new (init: ModelInit<ProjectMilestone>) => ProjectMilestone) & {
  copyOf(source: ProjectMilestone, mutator: (draft: MutableModel<ProjectMilestone>) => MutableModel<ProjectMilestone> | void): ProjectMilestone;
}

type EagerProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Team: string;
  readonly Name: string;
  readonly Descript?: string | null;
  readonly Status: ProjectStatus | keyof typeof ProjectStatus;
  readonly ProjectMilestones?: (ProjectMilestone | null)[] | null;
  readonly StartDate?: string | null;
  readonly EndDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyProject = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Project, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Team: string;
  readonly Name: string;
  readonly Descript?: string | null;
  readonly Status: ProjectStatus | keyof typeof ProjectStatus;
  readonly ProjectMilestones: AsyncCollection<ProjectMilestone>;
  readonly StartDate?: string | null;
  readonly EndDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Project = LazyLoading extends LazyLoadingDisabled ? EagerProject : LazyProject

export declare const Project: (new (init: ModelInit<Project>) => Project) & {
  copyOf(source: Project, mutator: (draft: MutableModel<Project>) => MutableModel<Project> | void): Project;
}

type EagerTaskComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TaskComment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Task: string;
  readonly Comment: string;
  readonly CommentDateTime: string;
  readonly CommentTeamMember: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTaskComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TaskComment, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Task: string;
  readonly Comment: string;
  readonly CommentDateTime: string;
  readonly CommentTeamMember: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type TaskComment = LazyLoading extends LazyLoadingDisabled ? EagerTaskComment : LazyTaskComment

export declare const TaskComment: (new (init: ModelInit<TaskComment>) => TaskComment) & {
  copyOf(source: TaskComment, mutator: (draft: MutableModel<TaskComment>) => MutableModel<TaskComment> | void): TaskComment;
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
  readonly DueDate?: string | null;
  readonly Status: TaskStatus | keyof typeof TaskStatus;
  readonly Priority: TaskPriority | keyof typeof TaskPriority;
  readonly CompletedByTeamMember?: string | null;
  readonly CompletedDate?: string | null;
  readonly Comments?: (TaskComment | null)[] | null;
  readonly StartDate?: string | null;
  readonly Owner?: TeamMember | null;
  readonly Project?: Project | null;
  readonly ProjectMilestone?: ProjectMilestone | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly taskOwnerId?: string | null;
  readonly taskProjectId?: string | null;
  readonly taskProjectMilestoneId?: string | null;
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
  readonly DueDate?: string | null;
  readonly Status: TaskStatus | keyof typeof TaskStatus;
  readonly Priority: TaskPriority | keyof typeof TaskPriority;
  readonly CompletedByTeamMember?: string | null;
  readonly CompletedDate?: string | null;
  readonly Comments: AsyncCollection<TaskComment>;
  readonly StartDate?: string | null;
  readonly Owner: AsyncItem<TeamMember | undefined>;
  readonly Project: AsyncItem<Project | undefined>;
  readonly ProjectMilestone: AsyncItem<ProjectMilestone | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly taskOwnerId?: string | null;
  readonly taskProjectId?: string | null;
  readonly taskProjectMilestoneId?: string | null;
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
  readonly Role: TeamMemberRole | keyof typeof TeamMemberRole;
  readonly Status: TeamMemberStatus | keyof typeof TeamMemberStatus;
  readonly InvitedDateTime: string;
  readonly InvitedByUserProfile: string;
  readonly ConfirmedDateTime?: string | null;
  readonly DeclinedDateTime?: string | null;
  readonly DepartedDateTime?: string | null;
  readonly DepartedComment?: string | null;
  readonly UserProfile?: UserProfile | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamMemberUserProfileId?: string | null;
}

type LazyTeamMember = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<TeamMember, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Team: string;
  readonly Role: TeamMemberRole | keyof typeof TeamMemberRole;
  readonly Status: TeamMemberStatus | keyof typeof TeamMemberStatus;
  readonly InvitedDateTime: string;
  readonly InvitedByUserProfile: string;
  readonly ConfirmedDateTime?: string | null;
  readonly DeclinedDateTime?: string | null;
  readonly DepartedDateTime?: string | null;
  readonly DepartedComment?: string | null;
  readonly UserProfile: AsyncItem<UserProfile | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly teamMemberUserProfileId?: string | null;
}

export declare type TeamMember = LazyLoading extends LazyLoadingDisabled ? EagerTeamMember : LazyTeamMember

export declare const TeamMember: (new (init: ModelInit<TeamMember>) => TeamMember) & {
  copyOf(source: TeamMember, mutator: (draft: MutableModel<TeamMember>) => MutableModel<TeamMember> | void): TeamMember;
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
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProfile = LazyLoading extends LazyLoadingDisabled ? EagerUserProfile : LazyUserProfile

export declare const UserProfile: (new (init: ModelInit<UserProfile>) => UserProfile) & {
  copyOf(source: UserProfile, mutator: (draft: MutableModel<UserProfile>) => MutableModel<UserProfile> | void): UserProfile;
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
  readonly Projects?: (Project | null)[] | null;
  readonly Events?: (Event | null)[] | null;
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
  readonly Projects: AsyncCollection<Project>;
  readonly Events: AsyncCollection<Event>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Team = LazyLoading extends LazyLoadingDisabled ? EagerTeam : LazyTeam

export declare const Team: (new (init: ModelInit<Team>) => Team) & {
  copyOf(source: Team, mutator: (draft: MutableModel<Team>) => MutableModel<Team> | void): Team;
}