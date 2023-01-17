/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserProfile = /* GraphQL */ `
  query GetUserProfile($id: ID!) {
    getUserProfile(id: $id) {
      id
      username
      visibility
      name
      searchName
      profileImage {
        storageKey
        alt
        searchAlt
        caption
        searchCaption
        detail
        searchDetail
      }
      tagline
      about
      Location {
        id
        name
        searchName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      UserInterests {
        items {
          id
          userprofileID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userInterestInterestId
        }
        nextToken
        startedAt
      }
      UserSkills {
        items {
          id
          userprofileID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userSkillSkillId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userProfileLocationId
    }
  }
`;
export const listUserProfiles = /* GraphQL */ `
  query ListUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        visibility
        name
        searchName
        profileImage {
          storageKey
          alt
          searchAlt
          caption
          searchCaption
          detail
          searchDetail
        }
        tagline
        about
        Location {
          id
          name
          searchName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserInterests {
          nextToken
          startedAt
        }
        UserSkills {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfileLocationId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserProfiles = /* GraphQL */ `
  query SyncUserProfiles(
    $filter: ModelUserProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        visibility
        name
        searchName
        profileImage {
          storageKey
          alt
          searchAlt
          caption
          searchCaption
          detail
          searchDetail
        }
        tagline
        about
        Location {
          id
          name
          searchName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserInterests {
          nextToken
          startedAt
        }
        UserSkills {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfileLocationId
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserImage = /* GraphQL */ `
  query GetUserImage($id: ID!) {
    getUserImage(id: $id) {
      id
      username
      image {
        storageKey
        alt
        searchAlt
        caption
        searchCaption
        detail
        searchDetail
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserImages = /* GraphQL */ `
  query ListUserImages(
    $filter: ModelUserImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        image {
          storageKey
          alt
          searchAlt
          caption
          searchCaption
          detail
          searchDetail
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserImages = /* GraphQL */ `
  query SyncUserImages(
    $filter: ModelUserImageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserImages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        image {
          storageKey
          alt
          searchAlt
          caption
          searchCaption
          detail
          searchDetail
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getLocation = /* GraphQL */ `
  query GetLocation($id: ID!) {
    getLocation(id: $id) {
      id
      name
      searchName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listLocations = /* GraphQL */ `
  query ListLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        searchName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLocations = /* GraphQL */ `
  query SyncLocations(
    $filter: ModelLocationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLocations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        searchName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserSkill = /* GraphQL */ `
  query GetUserSkill($id: ID!) {
    getUserSkill(id: $id) {
      id
      userprofileID
      Skill {
        id
        name
        searchName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      UserProfile {
        id
        username
        visibility
        name
        searchName
        profileImage {
          storageKey
          alt
          searchAlt
          caption
          searchCaption
          detail
          searchDetail
        }
        tagline
        about
        Location {
          id
          name
          searchName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserInterests {
          nextToken
          startedAt
        }
        UserSkills {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfileLocationId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userSkillSkillId
    }
  }
`;
export const listUserSkills = /* GraphQL */ `
  query ListUserSkills(
    $filter: ModelUserSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userprofileID
        Skill {
          id
          name
          searchName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserProfile {
          id
          username
          visibility
          name
          searchName
          tagline
          about
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userProfileLocationId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userSkillSkillId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserSkills = /* GraphQL */ `
  query SyncUserSkills(
    $filter: ModelUserSkillFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserSkills(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userprofileID
        Skill {
          id
          name
          searchName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserProfile {
          id
          username
          visibility
          name
          searchName
          tagline
          about
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userProfileLocationId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userSkillSkillId
      }
      nextToken
      startedAt
    }
  }
`;
export const getSkill = /* GraphQL */ `
  query GetSkill($id: ID!) {
    getSkill(id: $id) {
      id
      name
      searchName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listSkills = /* GraphQL */ `
  query ListSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        searchName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncSkills = /* GraphQL */ `
  query SyncSkills(
    $filter: ModelSkillFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSkills(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        searchName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserInterest = /* GraphQL */ `
  query GetUserInterest($id: ID!) {
    getUserInterest(id: $id) {
      id
      userprofileID
      Interest {
        id
        name
        searchName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      UserProfile {
        id
        username
        visibility
        name
        searchName
        profileImage {
          storageKey
          alt
          searchAlt
          caption
          searchCaption
          detail
          searchDetail
        }
        tagline
        about
        Location {
          id
          name
          searchName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserInterests {
          nextToken
          startedAt
        }
        UserSkills {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userProfileLocationId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userInterestInterestId
    }
  }
`;
export const listUserInterests = /* GraphQL */ `
  query ListUserInterests(
    $filter: ModelUserInterestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserInterests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userprofileID
        Interest {
          id
          name
          searchName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserProfile {
          id
          username
          visibility
          name
          searchName
          tagline
          about
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userProfileLocationId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInterestInterestId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserInterests = /* GraphQL */ `
  query SyncUserInterests(
    $filter: ModelUserInterestFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserInterests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userprofileID
        Interest {
          id
          name
          searchName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserProfile {
          id
          username
          visibility
          name
          searchName
          tagline
          about
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userProfileLocationId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInterestInterestId
      }
      nextToken
      startedAt
    }
  }
`;
export const getInterest = /* GraphQL */ `
  query GetInterest($id: ID!) {
    getInterest(id: $id) {
      id
      name
      searchName
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listInterests = /* GraphQL */ `
  query ListInterests(
    $filter: ModelInterestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInterests(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        searchName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncInterests = /* GraphQL */ `
  query SyncInterests(
    $filter: ModelInterestFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInterests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        searchName
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserNotification = /* GraphQL */ `
  query GetUserNotification($id: ID!) {
    getUserNotification(id: $id) {
      id
      username
      message
      level
      displayedAt
      heading
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserNotifications = /* GraphQL */ `
  query ListUserNotifications(
    $filter: ModelUserNotificationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        username
        message
        level
        displayedAt
        heading
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserNotifications = /* GraphQL */ `
  query SyncUserNotifications(
    $filter: ModelUserNotificationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserNotifications(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        message
        level
        displayedAt
        heading
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserContact = /* GraphQL */ `
  query GetUserContact($id: ID!) {
    getUserContact(id: $id) {
      id
      username
      contact {
        name
        searchString
        email
        phone
        address {
          addressLine1
          addressLine2
          city
          stateProvince
          country
          postalCode
        }
        notes
        searchNotes
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listUserContacts = /* GraphQL */ `
  query ListUserContacts(
    $filter: ModelUserContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        contact {
          name
          searchString
          email
          phone
          notes
          searchNotes
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserContacts = /* GraphQL */ `
  query SyncUserContacts(
    $filter: ModelUserContactFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserContacts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        contact {
          name
          searchString
          email
          phone
          notes
          searchNotes
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
      searchName
      visibility
      teamType
      customTeamType
      description
      TeamMembers {
        items {
          id
          teamID
          username
          role
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      TeamInvitations {
        items {
          id
          teamID
          role
          status
          username
          externalEmail
          invitedByUsername
          responseDateTime
          responseComment
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Tasks {
        items {
          id
          teamID
          name
          searchName
          description
          searchDescription
          dueDate
          status
          priority
          completedByUsername
          completedDate
          ownerUsername
          startDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      TeamImages {
        items {
          id
          teamID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamImageTeamEventId
        }
        nextToken
        startedAt
      }
      TeamContacts {
        items {
          id
          teamID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      TeamEvents {
        items {
          id
          teamID
          name
          searchName
          description
          searchDescription
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamEventEventId
        }
        nextToken
        startedAt
      }
      TeamProjects {
        items {
          id
          teamID
          name
          searchName
          description
          searchDescription
          status
          startDate
          endDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        searchName
        visibility
        teamType
        customTeamType
        description
        TeamMembers {
          nextToken
          startedAt
        }
        TeamInvitations {
          nextToken
          startedAt
        }
        Tasks {
          nextToken
          startedAt
        }
        TeamImages {
          nextToken
          startedAt
        }
        TeamContacts {
          nextToken
          startedAt
        }
        TeamEvents {
          nextToken
          startedAt
        }
        TeamProjects {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTeams = /* GraphQL */ `
  query SyncTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeams(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        searchName
        visibility
        teamType
        customTeamType
        description
        TeamMembers {
          nextToken
          startedAt
        }
        TeamInvitations {
          nextToken
          startedAt
        }
        Tasks {
          nextToken
          startedAt
        }
        TeamImages {
          nextToken
          startedAt
        }
        TeamContacts {
          nextToken
          startedAt
        }
        TeamEvents {
          nextToken
          startedAt
        }
        TeamProjects {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTeamMember = /* GraphQL */ `
  query GetTeamMember($id: ID!) {
    getTeamMember(id: $id) {
      id
      teamID
      username
      role
      Team {
        id
        name
        searchName
        visibility
        teamType
        customTeamType
        description
        TeamMembers {
          nextToken
          startedAt
        }
        TeamInvitations {
          nextToken
          startedAt
        }
        Tasks {
          nextToken
          startedAt
        }
        TeamImages {
          nextToken
          startedAt
        }
        TeamContacts {
          nextToken
          startedAt
        }
        TeamEvents {
          nextToken
          startedAt
        }
        TeamProjects {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTeamMembers = /* GraphQL */ `
  query ListTeamMembers(
    $filter: ModelTeamMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamMembers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        teamID
        username
        role
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTeamMembers = /* GraphQL */ `
  query SyncTeamMembers(
    $filter: ModelTeamMemberFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeamMembers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        teamID
        username
        role
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTeamInvitation = /* GraphQL */ `
  query GetTeamInvitation($id: ID!) {
    getTeamInvitation(id: $id) {
      id
      teamID
      role
      status
      username
      externalEmail
      invitedByUsername
      responseDateTime
      responseComment
      Team {
        id
        name
        searchName
        visibility
        teamType
        customTeamType
        description
        TeamMembers {
          nextToken
          startedAt
        }
        TeamInvitations {
          nextToken
          startedAt
        }
        Tasks {
          nextToken
          startedAt
        }
        TeamImages {
          nextToken
          startedAt
        }
        TeamContacts {
          nextToken
          startedAt
        }
        TeamEvents {
          nextToken
          startedAt
        }
        TeamProjects {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTeamInvitations = /* GraphQL */ `
  query ListTeamInvitations(
    $filter: ModelTeamInvitationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamInvitations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        teamID
        role
        status
        username
        externalEmail
        invitedByUsername
        responseDateTime
        responseComment
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTeamInvitations = /* GraphQL */ `
  query SyncTeamInvitations(
    $filter: ModelTeamInvitationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeamInvitations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        teamID
        role
        status
        username
        externalEmail
        invitedByUsername
        responseDateTime
        responseComment
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTeamImage = /* GraphQL */ `
  query GetTeamImage($id: ID!) {
    getTeamImage(id: $id) {
      id
      teamID
      image {
        storageKey
        alt
        searchAlt
        caption
        searchCaption
        detail
        searchDetail
      }
      Team {
        id
        name
        searchName
        visibility
        teamType
        customTeamType
        description
        TeamMembers {
          nextToken
          startedAt
        }
        TeamInvitations {
          nextToken
          startedAt
        }
        Tasks {
          nextToken
          startedAt
        }
        TeamImages {
          nextToken
          startedAt
        }
        TeamContacts {
          nextToken
          startedAt
        }
        TeamEvents {
          nextToken
          startedAt
        }
        TeamProjects {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      TeamEvent {
        id
        teamID
        name
        searchName
        description
        searchDescription
        event {
          id
          name
          searchName
          date
          time
          description
          searchDescription
          website
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          eventVenueId
        }
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        TeamEventImages {
          nextToken
          startedAt
        }
        TeamEventComments {
          nextToken
          startedAt
        }
        TeamEventContacts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        teamEventEventId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      teamImageTeamEventId
    }
  }
`;
export const listTeamImages = /* GraphQL */ `
  query ListTeamImages(
    $filter: ModelTeamImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        teamID
        image {
          storageKey
          alt
          searchAlt
          caption
          searchCaption
          detail
          searchDetail
        }
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        TeamEvent {
          id
          teamID
          name
          searchName
          description
          searchDescription
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamEventEventId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        teamImageTeamEventId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTeamImages = /* GraphQL */ `
  query SyncTeamImages(
    $filter: ModelTeamImageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeamImages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        teamID
        image {
          storageKey
          alt
          searchAlt
          caption
          searchCaption
          detail
          searchDetail
        }
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        TeamEvent {
          id
          teamID
          name
          searchName
          description
          searchDescription
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamEventEventId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        teamImageTeamEventId
      }
      nextToken
      startedAt
    }
  }
`;
export const getTeamContact = /* GraphQL */ `
  query GetTeamContact($id: ID!) {
    getTeamContact(id: $id) {
      id
      teamID
      contact {
        name
        searchString
        email
        phone
        address {
          addressLine1
          addressLine2
          city
          stateProvince
          country
          postalCode
        }
        notes
        searchNotes
      }
      Team {
        id
        name
        searchName
        visibility
        teamType
        customTeamType
        description
        TeamMembers {
          nextToken
          startedAt
        }
        TeamInvitations {
          nextToken
          startedAt
        }
        Tasks {
          nextToken
          startedAt
        }
        TeamImages {
          nextToken
          startedAt
        }
        TeamContacts {
          nextToken
          startedAt
        }
        TeamEvents {
          nextToken
          startedAt
        }
        TeamProjects {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      TeamContactComments {
        items {
          id
          teamContactID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTeamContacts = /* GraphQL */ `
  query ListTeamContacts(
    $filter: ModelTeamContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        teamID
        contact {
          name
          searchString
          email
          phone
          notes
          searchNotes
        }
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        TeamContactComments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTeamContacts = /* GraphQL */ `
  query SyncTeamContacts(
    $filter: ModelTeamContactFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeamContacts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        teamID
        contact {
          name
          searchString
          email
          phone
          notes
          searchNotes
        }
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        TeamContactComments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTeamContactComment = /* GraphQL */ `
  query GetTeamContactComment($id: ID!) {
    getTeamContactComment(id: $id) {
      id
      teamContactID
      comment {
        comment
        searchComment
        postedByUsername
      }
      TeamContact {
        id
        teamID
        contact {
          name
          searchString
          email
          phone
          notes
          searchNotes
        }
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        TeamContactComments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTeamContactComments = /* GraphQL */ `
  query ListTeamContactComments(
    $filter: ModelTeamContactCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamContactComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        teamContactID
        comment {
          comment
          searchComment
          postedByUsername
        }
        TeamContact {
          id
          teamID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTeamContactComments = /* GraphQL */ `
  query SyncTeamContactComments(
    $filter: ModelTeamContactCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeamContactComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        teamContactID
        comment {
          comment
          searchComment
          postedByUsername
        }
        TeamContact {
          id
          teamID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTask = /* GraphQL */ `
  query GetTask($id: ID!) {
    getTask(id: $id) {
      id
      teamID
      name
      searchName
      description
      searchDescription
      dueDate
      status
      priority
      completedByUsername
      completedDate
      TaskComments {
        items {
          id
          taskID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      ownerUsername
      startDate
      Team {
        id
        name
        searchName
        visibility
        teamType
        customTeamType
        description
        TeamMembers {
          nextToken
          startedAt
        }
        TeamInvitations {
          nextToken
          startedAt
        }
        Tasks {
          nextToken
          startedAt
        }
        TeamImages {
          nextToken
          startedAt
        }
        TeamContacts {
          nextToken
          startedAt
        }
        TeamEvents {
          nextToken
          startedAt
        }
        TeamProjects {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTasks = /* GraphQL */ `
  query ListTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTasks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        teamID
        name
        searchName
        description
        searchDescription
        dueDate
        status
        priority
        completedByUsername
        completedDate
        TaskComments {
          nextToken
          startedAt
        }
        ownerUsername
        startDate
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTasks = /* GraphQL */ `
  query SyncTasks(
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTasks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        teamID
        name
        searchName
        description
        searchDescription
        dueDate
        status
        priority
        completedByUsername
        completedDate
        TaskComments {
          nextToken
          startedAt
        }
        ownerUsername
        startDate
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTaskComment = /* GraphQL */ `
  query GetTaskComment($id: ID!) {
    getTaskComment(id: $id) {
      id
      taskID
      comment {
        comment
        searchComment
        postedByUsername
      }
      Task {
        id
        teamID
        name
        searchName
        description
        searchDescription
        dueDate
        status
        priority
        completedByUsername
        completedDate
        TaskComments {
          nextToken
          startedAt
        }
        ownerUsername
        startDate
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTaskComments = /* GraphQL */ `
  query ListTaskComments(
    $filter: ModelTaskCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTaskComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        taskID
        comment {
          comment
          searchComment
          postedByUsername
        }
        Task {
          id
          teamID
          name
          searchName
          description
          searchDescription
          dueDate
          status
          priority
          completedByUsername
          completedDate
          ownerUsername
          startDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTaskComments = /* GraphQL */ `
  query SyncTaskComments(
    $filter: ModelTaskCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTaskComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        taskID
        comment {
          comment
          searchComment
          postedByUsername
        }
        Task {
          id
          teamID
          name
          searchName
          description
          searchDescription
          dueDate
          status
          priority
          completedByUsername
          completedDate
          ownerUsername
          startDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getVenue = /* GraphQL */ `
  query GetVenue($id: ID!) {
    getVenue(id: $id) {
      id
      name
      searchName
      address {
        addressLine1
        addressLine2
        city
        stateProvince
        country
        postalCode
      }
      website
      phone
      email
      VenueContacts {
        items {
          id
          venueID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listVenues = /* GraphQL */ `
  query ListVenues(
    $filter: ModelVenueFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVenues(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        searchName
        address {
          addressLine1
          addressLine2
          city
          stateProvince
          country
          postalCode
        }
        website
        phone
        email
        VenueContacts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncVenues = /* GraphQL */ `
  query SyncVenues(
    $filter: ModelVenueFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVenues(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        searchName
        address {
          addressLine1
          addressLine2
          city
          stateProvince
          country
          postalCode
        }
        website
        phone
        email
        VenueContacts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getVenueContact = /* GraphQL */ `
  query GetVenueContact($id: ID!) {
    getVenueContact(id: $id) {
      id
      venueID
      contact {
        name
        searchString
        email
        phone
        address {
          addressLine1
          addressLine2
          city
          stateProvince
          country
          postalCode
        }
        notes
        searchNotes
      }
      Venue {
        id
        name
        searchName
        address {
          addressLine1
          addressLine2
          city
          stateProvince
          country
          postalCode
        }
        website
        phone
        email
        VenueContacts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listVenueContacts = /* GraphQL */ `
  query ListVenueContacts(
    $filter: ModelVenueContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVenueContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        venueID
        contact {
          name
          searchString
          email
          phone
          notes
          searchNotes
        }
        Venue {
          id
          name
          searchName
          website
          phone
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncVenueContacts = /* GraphQL */ `
  query SyncVenueContacts(
    $filter: ModelVenueContactFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncVenueContacts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        venueID
        contact {
          name
          searchString
          email
          phone
          notes
          searchNotes
        }
        Venue {
          id
          name
          searchName
          website
          phone
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      name
      searchName
      venue {
        id
        name
        searchName
        address {
          addressLine1
          addressLine2
          city
          stateProvince
          country
          postalCode
        }
        website
        phone
        email
        VenueContacts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      date
      time
      description
      searchDescription
      website
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      eventVenueId
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        searchName
        venue {
          id
          name
          searchName
          website
          phone
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        date
        time
        description
        searchDescription
        website
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        eventVenueId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncEvents = /* GraphQL */ `
  query SyncEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        searchName
        venue {
          id
          name
          searchName
          website
          phone
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        date
        time
        description
        searchDescription
        website
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        eventVenueId
      }
      nextToken
      startedAt
    }
  }
`;
export const getTeamEvent = /* GraphQL */ `
  query GetTeamEvent($id: ID!) {
    getTeamEvent(id: $id) {
      id
      teamID
      name
      searchName
      description
      searchDescription
      event {
        id
        name
        searchName
        venue {
          id
          name
          searchName
          website
          phone
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        date
        time
        description
        searchDescription
        website
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        eventVenueId
      }
      Team {
        id
        name
        searchName
        visibility
        teamType
        customTeamType
        description
        TeamMembers {
          nextToken
          startedAt
        }
        TeamInvitations {
          nextToken
          startedAt
        }
        Tasks {
          nextToken
          startedAt
        }
        TeamImages {
          nextToken
          startedAt
        }
        TeamContacts {
          nextToken
          startedAt
        }
        TeamEvents {
          nextToken
          startedAt
        }
        TeamProjects {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      TeamEventImages {
        items {
          id
          teameventID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamEventImageTeamImageId
        }
        nextToken
        startedAt
      }
      TeamEventComments {
        items {
          id
          teameventID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      TeamEventContacts {
        items {
          id
          teameventID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      teamEventEventId
    }
  }
`;
export const listTeamEvents = /* GraphQL */ `
  query ListTeamEvents(
    $filter: ModelTeamEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        teamID
        name
        searchName
        description
        searchDescription
        event {
          id
          name
          searchName
          date
          time
          description
          searchDescription
          website
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          eventVenueId
        }
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        TeamEventImages {
          nextToken
          startedAt
        }
        TeamEventComments {
          nextToken
          startedAt
        }
        TeamEventContacts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        teamEventEventId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTeamEvents = /* GraphQL */ `
  query SyncTeamEvents(
    $filter: ModelTeamEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeamEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        teamID
        name
        searchName
        description
        searchDescription
        event {
          id
          name
          searchName
          date
          time
          description
          searchDescription
          website
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          eventVenueId
        }
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        TeamEventImages {
          nextToken
          startedAt
        }
        TeamEventComments {
          nextToken
          startedAt
        }
        TeamEventContacts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        teamEventEventId
      }
      nextToken
      startedAt
    }
  }
`;
export const getTeamEventImage = /* GraphQL */ `
  query GetTeamEventImage($id: ID!) {
    getTeamEventImage(id: $id) {
      id
      teameventID
      teamImage {
        id
        teamID
        image {
          storageKey
          alt
          searchAlt
          caption
          searchCaption
          detail
          searchDetail
        }
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        TeamEvent {
          id
          teamID
          name
          searchName
          description
          searchDescription
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamEventEventId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        teamImageTeamEventId
      }
      TeamEvent {
        id
        teamID
        name
        searchName
        description
        searchDescription
        event {
          id
          name
          searchName
          date
          time
          description
          searchDescription
          website
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          eventVenueId
        }
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        TeamEventImages {
          nextToken
          startedAt
        }
        TeamEventComments {
          nextToken
          startedAt
        }
        TeamEventContacts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        teamEventEventId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      teamEventImageTeamImageId
    }
  }
`;
export const listTeamEventImages = /* GraphQL */ `
  query ListTeamEventImages(
    $filter: ModelTeamEventImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamEventImages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        teameventID
        teamImage {
          id
          teamID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamImageTeamEventId
        }
        TeamEvent {
          id
          teamID
          name
          searchName
          description
          searchDescription
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamEventEventId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        teamEventImageTeamImageId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTeamEventImages = /* GraphQL */ `
  query SyncTeamEventImages(
    $filter: ModelTeamEventImageFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeamEventImages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        teameventID
        teamImage {
          id
          teamID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamImageTeamEventId
        }
        TeamEvent {
          id
          teamID
          name
          searchName
          description
          searchDescription
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamEventEventId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        teamEventImageTeamImageId
      }
      nextToken
      startedAt
    }
  }
`;
export const getTeamEventComment = /* GraphQL */ `
  query GetTeamEventComment($id: ID!) {
    getTeamEventComment(id: $id) {
      id
      teameventID
      comment {
        comment
        searchComment
        postedByUsername
      }
      TeamEvent {
        id
        teamID
        name
        searchName
        description
        searchDescription
        event {
          id
          name
          searchName
          date
          time
          description
          searchDescription
          website
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          eventVenueId
        }
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        TeamEventImages {
          nextToken
          startedAt
        }
        TeamEventComments {
          nextToken
          startedAt
        }
        TeamEventContacts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        teamEventEventId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTeamEventComments = /* GraphQL */ `
  query ListTeamEventComments(
    $filter: ModelTeamEventCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamEventComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        teameventID
        comment {
          comment
          searchComment
          postedByUsername
        }
        TeamEvent {
          id
          teamID
          name
          searchName
          description
          searchDescription
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamEventEventId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTeamEventComments = /* GraphQL */ `
  query SyncTeamEventComments(
    $filter: ModelTeamEventCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeamEventComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        teameventID
        comment {
          comment
          searchComment
          postedByUsername
        }
        TeamEvent {
          id
          teamID
          name
          searchName
          description
          searchDescription
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamEventEventId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTeamEventContact = /* GraphQL */ `
  query GetTeamEventContact($id: ID!) {
    getTeamEventContact(id: $id) {
      id
      teameventID
      contact {
        name
        searchString
        email
        phone
        address {
          addressLine1
          addressLine2
          city
          stateProvince
          country
          postalCode
        }
        notes
        searchNotes
      }
      TeamEvent {
        id
        teamID
        name
        searchName
        description
        searchDescription
        event {
          id
          name
          searchName
          date
          time
          description
          searchDescription
          website
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          eventVenueId
        }
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        TeamEventImages {
          nextToken
          startedAt
        }
        TeamEventComments {
          nextToken
          startedAt
        }
        TeamEventContacts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        teamEventEventId
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTeamEventContacts = /* GraphQL */ `
  query ListTeamEventContacts(
    $filter: ModelTeamEventContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamEventContacts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        teameventID
        contact {
          name
          searchString
          email
          phone
          notes
          searchNotes
        }
        TeamEvent {
          id
          teamID
          name
          searchName
          description
          searchDescription
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamEventEventId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTeamEventContacts = /* GraphQL */ `
  query SyncTeamEventContacts(
    $filter: ModelTeamEventContactFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeamEventContacts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        teameventID
        contact {
          name
          searchString
          email
          phone
          notes
          searchNotes
        }
        TeamEvent {
          id
          teamID
          name
          searchName
          description
          searchDescription
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamEventEventId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTeamProject = /* GraphQL */ `
  query GetTeamProject($id: ID!) {
    getTeamProject(id: $id) {
      id
      teamID
      name
      searchName
      description
      searchDescription
      status
      startDate
      endDate
      Team {
        id
        name
        searchName
        visibility
        teamType
        customTeamType
        description
        TeamMembers {
          nextToken
          startedAt
        }
        TeamInvitations {
          nextToken
          startedAt
        }
        Tasks {
          nextToken
          startedAt
        }
        TeamImages {
          nextToken
          startedAt
        }
        TeamContacts {
          nextToken
          startedAt
        }
        TeamEvents {
          nextToken
          startedAt
        }
        TeamProjects {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      TeamProjectMilestones {
        items {
          id
          teamprojectID
          name
          searchName
          description
          searchDescription
          status
          date
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      TeamProjectComments {
        items {
          id
          teamprojectID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTeamProjects = /* GraphQL */ `
  query ListTeamProjects(
    $filter: ModelTeamProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamProjects(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        teamID
        name
        searchName
        description
        searchDescription
        status
        startDate
        endDate
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        TeamProjectMilestones {
          nextToken
          startedAt
        }
        TeamProjectComments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTeamProjects = /* GraphQL */ `
  query SyncTeamProjects(
    $filter: ModelTeamProjectFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeamProjects(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        teamID
        name
        searchName
        description
        searchDescription
        status
        startDate
        endDate
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        TeamProjectMilestones {
          nextToken
          startedAt
        }
        TeamProjectComments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTeamProjectComment = /* GraphQL */ `
  query GetTeamProjectComment($id: ID!) {
    getTeamProjectComment(id: $id) {
      id
      teamprojectID
      comment {
        comment
        searchComment
        postedByUsername
      }
      TeamProject {
        id
        teamID
        name
        searchName
        description
        searchDescription
        status
        startDate
        endDate
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        TeamProjectMilestones {
          nextToken
          startedAt
        }
        TeamProjectComments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTeamProjectComments = /* GraphQL */ `
  query ListTeamProjectComments(
    $filter: ModelTeamProjectCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamProjectComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        teamprojectID
        comment {
          comment
          searchComment
          postedByUsername
        }
        TeamProject {
          id
          teamID
          name
          searchName
          description
          searchDescription
          status
          startDate
          endDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTeamProjectComments = /* GraphQL */ `
  query SyncTeamProjectComments(
    $filter: ModelTeamProjectCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeamProjectComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        teamprojectID
        comment {
          comment
          searchComment
          postedByUsername
        }
        TeamProject {
          id
          teamID
          name
          searchName
          description
          searchDescription
          status
          startDate
          endDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTeamProjectMilestone = /* GraphQL */ `
  query GetTeamProjectMilestone($id: ID!) {
    getTeamProjectMilestone(id: $id) {
      id
      teamprojectID
      name
      searchName
      description
      searchDescription
      status
      date
      TeamProject {
        id
        teamID
        name
        searchName
        description
        searchDescription
        status
        startDate
        endDate
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        TeamProjectMilestones {
          nextToken
          startedAt
        }
        TeamProjectComments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      TeamProjectMilestoneComments {
        items {
          id
          teamprojectmilestoneID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTeamProjectMilestones = /* GraphQL */ `
  query ListTeamProjectMilestones(
    $filter: ModelTeamProjectMilestoneFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamProjectMilestones(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        teamprojectID
        name
        searchName
        description
        searchDescription
        status
        date
        TeamProject {
          id
          teamID
          name
          searchName
          description
          searchDescription
          status
          startDate
          endDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        TeamProjectMilestoneComments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTeamProjectMilestones = /* GraphQL */ `
  query SyncTeamProjectMilestones(
    $filter: ModelTeamProjectMilestoneFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeamProjectMilestones(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        teamprojectID
        name
        searchName
        description
        searchDescription
        status
        date
        TeamProject {
          id
          teamID
          name
          searchName
          description
          searchDescription
          status
          startDate
          endDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        TeamProjectMilestoneComments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getTeamProjectMilestoneComment = /* GraphQL */ `
  query GetTeamProjectMilestoneComment($id: ID!) {
    getTeamProjectMilestoneComment(id: $id) {
      id
      teamprojectmilestoneID
      comment {
        comment
        searchComment
        postedByUsername
      }
      TeamProjectMilestone {
        id
        teamprojectID
        name
        searchName
        description
        searchDescription
        status
        date
        TeamProject {
          id
          teamID
          name
          searchName
          description
          searchDescription
          status
          startDate
          endDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        TeamProjectMilestoneComments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listTeamProjectMilestoneComments = /* GraphQL */ `
  query ListTeamProjectMilestoneComments(
    $filter: ModelTeamProjectMilestoneCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeamProjectMilestoneComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        teamprojectmilestoneID
        comment {
          comment
          searchComment
          postedByUsername
        }
        TeamProjectMilestone {
          id
          teamprojectID
          name
          searchName
          description
          searchDescription
          status
          date
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTeamProjectMilestoneComments = /* GraphQL */ `
  query SyncTeamProjectMilestoneComments(
    $filter: ModelTeamProjectMilestoneCommentFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTeamProjectMilestoneComments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        teamprojectmilestoneID
        comment {
          comment
          searchComment
          postedByUsername
        }
        TeamProjectMilestone {
          id
          teamprojectID
          name
          searchName
          description
          searchDescription
          status
          date
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getAsset = /* GraphQL */ `
  query GetAsset($id: ID!) {
    getAsset(id: $id) {
      id
      name
      searchName
      description
      searchDescription
      notes
      searchNotes
      product {
        id
        name
        searchString
        description
        searchDescription
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      assetProductId
    }
  }
`;
export const listAssets = /* GraphQL */ `
  query ListAssets(
    $filter: ModelAssetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAssets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        searchName
        description
        searchDescription
        notes
        searchNotes
        product {
          id
          name
          searchString
          description
          searchDescription
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        assetProductId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncAssets = /* GraphQL */ `
  query SyncAssets(
    $filter: ModelAssetFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAssets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        searchName
        description
        searchDescription
        notes
        searchNotes
        product {
          id
          name
          searchString
          description
          searchDescription
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        assetProductId
      }
      nextToken
      startedAt
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      searchString
      description
      searchDescription
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        searchString
        description
        searchDescription
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        searchString
        description
        searchDescription
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const userSkillsByUserprofileID = /* GraphQL */ `
  query UserSkillsByUserprofileID(
    $userprofileID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userSkillsByUserprofileID(
      userprofileID: $userprofileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userprofileID
        Skill {
          id
          name
          searchName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserProfile {
          id
          username
          visibility
          name
          searchName
          tagline
          about
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userProfileLocationId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userSkillSkillId
      }
      nextToken
      startedAt
    }
  }
`;
export const userInterestsByUserprofileID = /* GraphQL */ `
  query UserInterestsByUserprofileID(
    $userprofileID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserInterestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userInterestsByUserprofileID(
      userprofileID: $userprofileID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userprofileID
        Interest {
          id
          name
          searchName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        UserProfile {
          id
          username
          visibility
          name
          searchName
          tagline
          about
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userProfileLocationId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        userInterestInterestId
      }
      nextToken
      startedAt
    }
  }
`;
export const teamMembersByTeamID = /* GraphQL */ `
  query TeamMembersByTeamID(
    $teamID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTeamMemberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    teamMembersByTeamID(
      teamID: $teamID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        teamID
        username
        role
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const teamInvitationsByTeamID = /* GraphQL */ `
  query TeamInvitationsByTeamID(
    $teamID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTeamInvitationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    teamInvitationsByTeamID(
      teamID: $teamID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        teamID
        role
        status
        username
        externalEmail
        invitedByUsername
        responseDateTime
        responseComment
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const teamImagesByTeamID = /* GraphQL */ `
  query TeamImagesByTeamID(
    $teamID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTeamImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    teamImagesByTeamID(
      teamID: $teamID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        teamID
        image {
          storageKey
          alt
          searchAlt
          caption
          searchCaption
          detail
          searchDetail
        }
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        TeamEvent {
          id
          teamID
          name
          searchName
          description
          searchDescription
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamEventEventId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        teamImageTeamEventId
      }
      nextToken
      startedAt
    }
  }
`;
export const teamContactsByTeamID = /* GraphQL */ `
  query TeamContactsByTeamID(
    $teamID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTeamContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    teamContactsByTeamID(
      teamID: $teamID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        teamID
        contact {
          name
          searchString
          email
          phone
          notes
          searchNotes
        }
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        TeamContactComments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const teamContactCommentsByTeamContactID = /* GraphQL */ `
  query TeamContactCommentsByTeamContactID(
    $teamContactID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTeamContactCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    teamContactCommentsByTeamContactID(
      teamContactID: $teamContactID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        teamContactID
        comment {
          comment
          searchComment
          postedByUsername
        }
        TeamContact {
          id
          teamID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const tasksByTeamID = /* GraphQL */ `
  query TasksByTeamID(
    $teamID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTaskFilterInput
    $limit: Int
    $nextToken: String
  ) {
    tasksByTeamID(
      teamID: $teamID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        teamID
        name
        searchName
        description
        searchDescription
        dueDate
        status
        priority
        completedByUsername
        completedDate
        TaskComments {
          nextToken
          startedAt
        }
        ownerUsername
        startDate
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const taskCommentsByTaskID = /* GraphQL */ `
  query TaskCommentsByTaskID(
    $taskID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTaskCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    taskCommentsByTaskID(
      taskID: $taskID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        taskID
        comment {
          comment
          searchComment
          postedByUsername
        }
        Task {
          id
          teamID
          name
          searchName
          description
          searchDescription
          dueDate
          status
          priority
          completedByUsername
          completedDate
          ownerUsername
          startDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const venueContactsByVenueID = /* GraphQL */ `
  query VenueContactsByVenueID(
    $venueID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelVenueContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    venueContactsByVenueID(
      venueID: $venueID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        venueID
        contact {
          name
          searchString
          email
          phone
          notes
          searchNotes
        }
        Venue {
          id
          name
          searchName
          website
          phone
          email
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const teamEventsByTeamID = /* GraphQL */ `
  query TeamEventsByTeamID(
    $teamID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTeamEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    teamEventsByTeamID(
      teamID: $teamID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        teamID
        name
        searchName
        description
        searchDescription
        event {
          id
          name
          searchName
          date
          time
          description
          searchDescription
          website
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          eventVenueId
        }
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        TeamEventImages {
          nextToken
          startedAt
        }
        TeamEventComments {
          nextToken
          startedAt
        }
        TeamEventContacts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        teamEventEventId
      }
      nextToken
      startedAt
    }
  }
`;
export const teamEventImagesByTeameventID = /* GraphQL */ `
  query TeamEventImagesByTeameventID(
    $teameventID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTeamEventImageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    teamEventImagesByTeameventID(
      teameventID: $teameventID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        teameventID
        teamImage {
          id
          teamID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamImageTeamEventId
        }
        TeamEvent {
          id
          teamID
          name
          searchName
          description
          searchDescription
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamEventEventId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        teamEventImageTeamImageId
      }
      nextToken
      startedAt
    }
  }
`;
export const teamEventCommentsByTeameventID = /* GraphQL */ `
  query TeamEventCommentsByTeameventID(
    $teameventID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTeamEventCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    teamEventCommentsByTeameventID(
      teameventID: $teameventID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        teameventID
        comment {
          comment
          searchComment
          postedByUsername
        }
        TeamEvent {
          id
          teamID
          name
          searchName
          description
          searchDescription
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamEventEventId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const teamEventContactsByTeameventID = /* GraphQL */ `
  query TeamEventContactsByTeameventID(
    $teameventID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTeamEventContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    teamEventContactsByTeameventID(
      teameventID: $teameventID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        teameventID
        contact {
          name
          searchString
          email
          phone
          notes
          searchNotes
        }
        TeamEvent {
          id
          teamID
          name
          searchName
          description
          searchDescription
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          teamEventEventId
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const teamProjectsByTeamID = /* GraphQL */ `
  query TeamProjectsByTeamID(
    $teamID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTeamProjectFilterInput
    $limit: Int
    $nextToken: String
  ) {
    teamProjectsByTeamID(
      teamID: $teamID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        teamID
        name
        searchName
        description
        searchDescription
        status
        startDate
        endDate
        Team {
          id
          name
          searchName
          visibility
          teamType
          customTeamType
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        TeamProjectMilestones {
          nextToken
          startedAt
        }
        TeamProjectComments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const teamProjectCommentsByTeamprojectID = /* GraphQL */ `
  query TeamProjectCommentsByTeamprojectID(
    $teamprojectID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTeamProjectCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    teamProjectCommentsByTeamprojectID(
      teamprojectID: $teamprojectID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        teamprojectID
        comment {
          comment
          searchComment
          postedByUsername
        }
        TeamProject {
          id
          teamID
          name
          searchName
          description
          searchDescription
          status
          startDate
          endDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const teamProjectMilestonesByTeamprojectID = /* GraphQL */ `
  query TeamProjectMilestonesByTeamprojectID(
    $teamprojectID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTeamProjectMilestoneFilterInput
    $limit: Int
    $nextToken: String
  ) {
    teamProjectMilestonesByTeamprojectID(
      teamprojectID: $teamprojectID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        teamprojectID
        name
        searchName
        description
        searchDescription
        status
        date
        TeamProject {
          id
          teamID
          name
          searchName
          description
          searchDescription
          status
          startDate
          endDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        TeamProjectMilestoneComments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const teamProjectMilestoneCommentsByTeamprojectmilestoneID = /* GraphQL */ `
  query TeamProjectMilestoneCommentsByTeamprojectmilestoneID(
    $teamprojectmilestoneID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelTeamProjectMilestoneCommentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    teamProjectMilestoneCommentsByTeamprojectmilestoneID(
      teamprojectmilestoneID: $teamprojectmilestoneID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        teamprojectmilestoneID
        comment {
          comment
          searchComment
          postedByUsername
        }
        TeamProjectMilestone {
          id
          teamprojectID
          name
          searchName
          description
          searchDescription
          status
          date
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
