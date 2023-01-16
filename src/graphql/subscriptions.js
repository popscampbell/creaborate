/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUserProfile = /* GraphQL */ `
  subscription OnCreateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onCreateUserProfile(filter: $filter) {
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
export const onUpdateUserProfile = /* GraphQL */ `
  subscription OnUpdateUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onUpdateUserProfile(filter: $filter) {
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
export const onDeleteUserProfile = /* GraphQL */ `
  subscription OnDeleteUserProfile(
    $filter: ModelSubscriptionUserProfileFilterInput
  ) {
    onDeleteUserProfile(filter: $filter) {
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
export const onCreateUserImage = /* GraphQL */ `
  subscription OnCreateUserImage(
    $filter: ModelSubscriptionUserImageFilterInput
  ) {
    onCreateUserImage(filter: $filter) {
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
export const onUpdateUserImage = /* GraphQL */ `
  subscription OnUpdateUserImage(
    $filter: ModelSubscriptionUserImageFilterInput
  ) {
    onUpdateUserImage(filter: $filter) {
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
export const onDeleteUserImage = /* GraphQL */ `
  subscription OnDeleteUserImage(
    $filter: ModelSubscriptionUserImageFilterInput
  ) {
    onDeleteUserImage(filter: $filter) {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onCreateLocation(filter: $filter) {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation($filter: ModelSubscriptionLocationFilterInput) {
    onUpdateLocation(filter: $filter) {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation($filter: ModelSubscriptionLocationFilterInput) {
    onDeleteLocation(filter: $filter) {
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
export const onCreateUserSkill = /* GraphQL */ `
  subscription OnCreateUserSkill(
    $filter: ModelSubscriptionUserSkillFilterInput
  ) {
    onCreateUserSkill(filter: $filter) {
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
export const onUpdateUserSkill = /* GraphQL */ `
  subscription OnUpdateUserSkill(
    $filter: ModelSubscriptionUserSkillFilterInput
  ) {
    onUpdateUserSkill(filter: $filter) {
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
export const onDeleteUserSkill = /* GraphQL */ `
  subscription OnDeleteUserSkill(
    $filter: ModelSubscriptionUserSkillFilterInput
  ) {
    onDeleteUserSkill(filter: $filter) {
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
export const onCreateSkill = /* GraphQL */ `
  subscription OnCreateSkill($filter: ModelSubscriptionSkillFilterInput) {
    onCreateSkill(filter: $filter) {
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
export const onUpdateSkill = /* GraphQL */ `
  subscription OnUpdateSkill($filter: ModelSubscriptionSkillFilterInput) {
    onUpdateSkill(filter: $filter) {
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
export const onDeleteSkill = /* GraphQL */ `
  subscription OnDeleteSkill($filter: ModelSubscriptionSkillFilterInput) {
    onDeleteSkill(filter: $filter) {
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
export const onCreateUserInterest = /* GraphQL */ `
  subscription OnCreateUserInterest(
    $filter: ModelSubscriptionUserInterestFilterInput
  ) {
    onCreateUserInterest(filter: $filter) {
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
export const onUpdateUserInterest = /* GraphQL */ `
  subscription OnUpdateUserInterest(
    $filter: ModelSubscriptionUserInterestFilterInput
  ) {
    onUpdateUserInterest(filter: $filter) {
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
export const onDeleteUserInterest = /* GraphQL */ `
  subscription OnDeleteUserInterest(
    $filter: ModelSubscriptionUserInterestFilterInput
  ) {
    onDeleteUserInterest(filter: $filter) {
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
export const onCreateInterest = /* GraphQL */ `
  subscription OnCreateInterest($filter: ModelSubscriptionInterestFilterInput) {
    onCreateInterest(filter: $filter) {
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
export const onUpdateInterest = /* GraphQL */ `
  subscription OnUpdateInterest($filter: ModelSubscriptionInterestFilterInput) {
    onUpdateInterest(filter: $filter) {
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
export const onDeleteInterest = /* GraphQL */ `
  subscription OnDeleteInterest($filter: ModelSubscriptionInterestFilterInput) {
    onDeleteInterest(filter: $filter) {
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
export const onCreateUserNotification = /* GraphQL */ `
  subscription OnCreateUserNotification(
    $filter: ModelSubscriptionUserNotificationFilterInput
  ) {
    onCreateUserNotification(filter: $filter) {
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
export const onUpdateUserNotification = /* GraphQL */ `
  subscription OnUpdateUserNotification(
    $filter: ModelSubscriptionUserNotificationFilterInput
  ) {
    onUpdateUserNotification(filter: $filter) {
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
export const onDeleteUserNotification = /* GraphQL */ `
  subscription OnDeleteUserNotification(
    $filter: ModelSubscriptionUserNotificationFilterInput
  ) {
    onDeleteUserNotification(filter: $filter) {
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
export const onCreateUserContact = /* GraphQL */ `
  subscription OnCreateUserContact(
    $filter: ModelSubscriptionUserContactFilterInput
  ) {
    onCreateUserContact(filter: $filter) {
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
export const onUpdateUserContact = /* GraphQL */ `
  subscription OnUpdateUserContact(
    $filter: ModelSubscriptionUserContactFilterInput
  ) {
    onUpdateUserContact(filter: $filter) {
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
export const onDeleteUserContact = /* GraphQL */ `
  subscription OnDeleteUserContact(
    $filter: ModelSubscriptionUserContactFilterInput
  ) {
    onDeleteUserContact(filter: $filter) {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onCreateTeam(filter: $filter) {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam($filter: ModelSubscriptionTeamFilterInput) {
    onUpdateTeam(filter: $filter) {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam($filter: ModelSubscriptionTeamFilterInput) {
    onDeleteTeam(filter: $filter) {
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
export const onCreateTeamMember = /* GraphQL */ `
  subscription OnCreateTeamMember(
    $filter: ModelSubscriptionTeamMemberFilterInput
  ) {
    onCreateTeamMember(filter: $filter) {
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
export const onUpdateTeamMember = /* GraphQL */ `
  subscription OnUpdateTeamMember(
    $filter: ModelSubscriptionTeamMemberFilterInput
  ) {
    onUpdateTeamMember(filter: $filter) {
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
export const onDeleteTeamMember = /* GraphQL */ `
  subscription OnDeleteTeamMember(
    $filter: ModelSubscriptionTeamMemberFilterInput
  ) {
    onDeleteTeamMember(filter: $filter) {
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
export const onCreateTeamInvitation = /* GraphQL */ `
  subscription OnCreateTeamInvitation(
    $filter: ModelSubscriptionTeamInvitationFilterInput
  ) {
    onCreateTeamInvitation(filter: $filter) {
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
export const onUpdateTeamInvitation = /* GraphQL */ `
  subscription OnUpdateTeamInvitation(
    $filter: ModelSubscriptionTeamInvitationFilterInput
  ) {
    onUpdateTeamInvitation(filter: $filter) {
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
export const onDeleteTeamInvitation = /* GraphQL */ `
  subscription OnDeleteTeamInvitation(
    $filter: ModelSubscriptionTeamInvitationFilterInput
  ) {
    onDeleteTeamInvitation(filter: $filter) {
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
export const onCreateTeamImage = /* GraphQL */ `
  subscription OnCreateTeamImage(
    $filter: ModelSubscriptionTeamImageFilterInput
  ) {
    onCreateTeamImage(filter: $filter) {
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
export const onUpdateTeamImage = /* GraphQL */ `
  subscription OnUpdateTeamImage(
    $filter: ModelSubscriptionTeamImageFilterInput
  ) {
    onUpdateTeamImage(filter: $filter) {
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
export const onDeleteTeamImage = /* GraphQL */ `
  subscription OnDeleteTeamImage(
    $filter: ModelSubscriptionTeamImageFilterInput
  ) {
    onDeleteTeamImage(filter: $filter) {
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
export const onCreateTeamContact = /* GraphQL */ `
  subscription OnCreateTeamContact(
    $filter: ModelSubscriptionTeamContactFilterInput
  ) {
    onCreateTeamContact(filter: $filter) {
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
export const onUpdateTeamContact = /* GraphQL */ `
  subscription OnUpdateTeamContact(
    $filter: ModelSubscriptionTeamContactFilterInput
  ) {
    onUpdateTeamContact(filter: $filter) {
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
export const onDeleteTeamContact = /* GraphQL */ `
  subscription OnDeleteTeamContact(
    $filter: ModelSubscriptionTeamContactFilterInput
  ) {
    onDeleteTeamContact(filter: $filter) {
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
export const onCreateTeamContactComment = /* GraphQL */ `
  subscription OnCreateTeamContactComment(
    $filter: ModelSubscriptionTeamContactCommentFilterInput
  ) {
    onCreateTeamContactComment(filter: $filter) {
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
export const onUpdateTeamContactComment = /* GraphQL */ `
  subscription OnUpdateTeamContactComment(
    $filter: ModelSubscriptionTeamContactCommentFilterInput
  ) {
    onUpdateTeamContactComment(filter: $filter) {
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
export const onDeleteTeamContactComment = /* GraphQL */ `
  subscription OnDeleteTeamContactComment(
    $filter: ModelSubscriptionTeamContactCommentFilterInput
  ) {
    onDeleteTeamContactComment(filter: $filter) {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask($filter: ModelSubscriptionTaskFilterInput) {
    onCreateTask(filter: $filter) {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask($filter: ModelSubscriptionTaskFilterInput) {
    onUpdateTask(filter: $filter) {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask($filter: ModelSubscriptionTaskFilterInput) {
    onDeleteTask(filter: $filter) {
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
export const onCreateTaskComment = /* GraphQL */ `
  subscription OnCreateTaskComment(
    $filter: ModelSubscriptionTaskCommentFilterInput
  ) {
    onCreateTaskComment(filter: $filter) {
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
export const onUpdateTaskComment = /* GraphQL */ `
  subscription OnUpdateTaskComment(
    $filter: ModelSubscriptionTaskCommentFilterInput
  ) {
    onUpdateTaskComment(filter: $filter) {
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
export const onDeleteTaskComment = /* GraphQL */ `
  subscription OnDeleteTaskComment(
    $filter: ModelSubscriptionTaskCommentFilterInput
  ) {
    onDeleteTaskComment(filter: $filter) {
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
export const onCreateVenue = /* GraphQL */ `
  subscription OnCreateVenue($filter: ModelSubscriptionVenueFilterInput) {
    onCreateVenue(filter: $filter) {
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
export const onUpdateVenue = /* GraphQL */ `
  subscription OnUpdateVenue($filter: ModelSubscriptionVenueFilterInput) {
    onUpdateVenue(filter: $filter) {
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
export const onDeleteVenue = /* GraphQL */ `
  subscription OnDeleteVenue($filter: ModelSubscriptionVenueFilterInput) {
    onDeleteVenue(filter: $filter) {
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
export const onCreateVenueContact = /* GraphQL */ `
  subscription OnCreateVenueContact(
    $filter: ModelSubscriptionVenueContactFilterInput
  ) {
    onCreateVenueContact(filter: $filter) {
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
export const onUpdateVenueContact = /* GraphQL */ `
  subscription OnUpdateVenueContact(
    $filter: ModelSubscriptionVenueContactFilterInput
  ) {
    onUpdateVenueContact(filter: $filter) {
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
export const onDeleteVenueContact = /* GraphQL */ `
  subscription OnDeleteVenueContact(
    $filter: ModelSubscriptionVenueContactFilterInput
  ) {
    onDeleteVenueContact(filter: $filter) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
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
export const onCreateTeamEvent = /* GraphQL */ `
  subscription OnCreateTeamEvent(
    $filter: ModelSubscriptionTeamEventFilterInput
  ) {
    onCreateTeamEvent(filter: $filter) {
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
export const onUpdateTeamEvent = /* GraphQL */ `
  subscription OnUpdateTeamEvent(
    $filter: ModelSubscriptionTeamEventFilterInput
  ) {
    onUpdateTeamEvent(filter: $filter) {
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
export const onDeleteTeamEvent = /* GraphQL */ `
  subscription OnDeleteTeamEvent(
    $filter: ModelSubscriptionTeamEventFilterInput
  ) {
    onDeleteTeamEvent(filter: $filter) {
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
export const onCreateTeamEventImage = /* GraphQL */ `
  subscription OnCreateTeamEventImage(
    $filter: ModelSubscriptionTeamEventImageFilterInput
  ) {
    onCreateTeamEventImage(filter: $filter) {
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
export const onUpdateTeamEventImage = /* GraphQL */ `
  subscription OnUpdateTeamEventImage(
    $filter: ModelSubscriptionTeamEventImageFilterInput
  ) {
    onUpdateTeamEventImage(filter: $filter) {
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
export const onDeleteTeamEventImage = /* GraphQL */ `
  subscription OnDeleteTeamEventImage(
    $filter: ModelSubscriptionTeamEventImageFilterInput
  ) {
    onDeleteTeamEventImage(filter: $filter) {
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
export const onCreateTeamEventComment = /* GraphQL */ `
  subscription OnCreateTeamEventComment(
    $filter: ModelSubscriptionTeamEventCommentFilterInput
  ) {
    onCreateTeamEventComment(filter: $filter) {
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
export const onUpdateTeamEventComment = /* GraphQL */ `
  subscription OnUpdateTeamEventComment(
    $filter: ModelSubscriptionTeamEventCommentFilterInput
  ) {
    onUpdateTeamEventComment(filter: $filter) {
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
export const onDeleteTeamEventComment = /* GraphQL */ `
  subscription OnDeleteTeamEventComment(
    $filter: ModelSubscriptionTeamEventCommentFilterInput
  ) {
    onDeleteTeamEventComment(filter: $filter) {
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
export const onCreateTeamEventContact = /* GraphQL */ `
  subscription OnCreateTeamEventContact(
    $filter: ModelSubscriptionTeamEventContactFilterInput
  ) {
    onCreateTeamEventContact(filter: $filter) {
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
export const onUpdateTeamEventContact = /* GraphQL */ `
  subscription OnUpdateTeamEventContact(
    $filter: ModelSubscriptionTeamEventContactFilterInput
  ) {
    onUpdateTeamEventContact(filter: $filter) {
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
export const onDeleteTeamEventContact = /* GraphQL */ `
  subscription OnDeleteTeamEventContact(
    $filter: ModelSubscriptionTeamEventContactFilterInput
  ) {
    onDeleteTeamEventContact(filter: $filter) {
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
export const onCreateTeamProject = /* GraphQL */ `
  subscription OnCreateTeamProject(
    $filter: ModelSubscriptionTeamProjectFilterInput
  ) {
    onCreateTeamProject(filter: $filter) {
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
export const onUpdateTeamProject = /* GraphQL */ `
  subscription OnUpdateTeamProject(
    $filter: ModelSubscriptionTeamProjectFilterInput
  ) {
    onUpdateTeamProject(filter: $filter) {
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
export const onDeleteTeamProject = /* GraphQL */ `
  subscription OnDeleteTeamProject(
    $filter: ModelSubscriptionTeamProjectFilterInput
  ) {
    onDeleteTeamProject(filter: $filter) {
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
export const onCreateTeamProjectComment = /* GraphQL */ `
  subscription OnCreateTeamProjectComment(
    $filter: ModelSubscriptionTeamProjectCommentFilterInput
  ) {
    onCreateTeamProjectComment(filter: $filter) {
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
export const onUpdateTeamProjectComment = /* GraphQL */ `
  subscription OnUpdateTeamProjectComment(
    $filter: ModelSubscriptionTeamProjectCommentFilterInput
  ) {
    onUpdateTeamProjectComment(filter: $filter) {
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
export const onDeleteTeamProjectComment = /* GraphQL */ `
  subscription OnDeleteTeamProjectComment(
    $filter: ModelSubscriptionTeamProjectCommentFilterInput
  ) {
    onDeleteTeamProjectComment(filter: $filter) {
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
export const onCreateTeamProjectMilestone = /* GraphQL */ `
  subscription OnCreateTeamProjectMilestone(
    $filter: ModelSubscriptionTeamProjectMilestoneFilterInput
  ) {
    onCreateTeamProjectMilestone(filter: $filter) {
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
export const onUpdateTeamProjectMilestone = /* GraphQL */ `
  subscription OnUpdateTeamProjectMilestone(
    $filter: ModelSubscriptionTeamProjectMilestoneFilterInput
  ) {
    onUpdateTeamProjectMilestone(filter: $filter) {
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
export const onDeleteTeamProjectMilestone = /* GraphQL */ `
  subscription OnDeleteTeamProjectMilestone(
    $filter: ModelSubscriptionTeamProjectMilestoneFilterInput
  ) {
    onDeleteTeamProjectMilestone(filter: $filter) {
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
export const onCreateTeamProjectMilestoneComment = /* GraphQL */ `
  subscription OnCreateTeamProjectMilestoneComment(
    $filter: ModelSubscriptionTeamProjectMilestoneCommentFilterInput
  ) {
    onCreateTeamProjectMilestoneComment(filter: $filter) {
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
export const onUpdateTeamProjectMilestoneComment = /* GraphQL */ `
  subscription OnUpdateTeamProjectMilestoneComment(
    $filter: ModelSubscriptionTeamProjectMilestoneCommentFilterInput
  ) {
    onUpdateTeamProjectMilestoneComment(filter: $filter) {
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
export const onDeleteTeamProjectMilestoneComment = /* GraphQL */ `
  subscription OnDeleteTeamProjectMilestoneComment(
    $filter: ModelSubscriptionTeamProjectMilestoneCommentFilterInput
  ) {
    onDeleteTeamProjectMilestoneComment(filter: $filter) {
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
export const onCreateAsset = /* GraphQL */ `
  subscription OnCreateAsset($filter: ModelSubscriptionAssetFilterInput) {
    onCreateAsset(filter: $filter) {
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
export const onUpdateAsset = /* GraphQL */ `
  subscription OnUpdateAsset($filter: ModelSubscriptionAssetFilterInput) {
    onUpdateAsset(filter: $filter) {
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
export const onDeleteAsset = /* GraphQL */ `
  subscription OnDeleteAsset($filter: ModelSubscriptionAssetFilterInput) {
    onDeleteAsset(filter: $filter) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($filter: ModelSubscriptionProductFilterInput) {
    onCreateProduct(filter: $filter) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($filter: ModelSubscriptionProductFilterInput) {
    onUpdateProduct(filter: $filter) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($filter: ModelSubscriptionProductFilterInput) {
    onDeleteProduct(filter: $filter) {
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
