// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

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

const { TeamMember, Team, UserProfile } = initSchema(schema);

export {
  TeamMember,
  Team,
  UserProfile,
  TeamVisibility,
  TeamMemberStatus,
  TeamMemberRole,
  TeamType
};