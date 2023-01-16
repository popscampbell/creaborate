/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUserProfile = /* GraphQL */ `
  mutation CreateUserProfile(
    $input: CreateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    createUserProfile(input: $input, condition: $condition) {
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
export const updateUserProfile = /* GraphQL */ `
  mutation UpdateUserProfile(
    $input: UpdateUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    updateUserProfile(input: $input, condition: $condition) {
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
export const deleteUserProfile = /* GraphQL */ `
  mutation DeleteUserProfile(
    $input: DeleteUserProfileInput!
    $condition: ModelUserProfileConditionInput
  ) {
    deleteUserProfile(input: $input, condition: $condition) {
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
export const createUserImage = /* GraphQL */ `
  mutation CreateUserImage(
    $input: CreateUserImageInput!
    $condition: ModelUserImageConditionInput
  ) {
    createUserImage(input: $input, condition: $condition) {
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
export const updateUserImage = /* GraphQL */ `
  mutation UpdateUserImage(
    $input: UpdateUserImageInput!
    $condition: ModelUserImageConditionInput
  ) {
    updateUserImage(input: $input, condition: $condition) {
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
export const deleteUserImage = /* GraphQL */ `
  mutation DeleteUserImage(
    $input: DeleteUserImageInput!
    $condition: ModelUserImageConditionInput
  ) {
    deleteUserImage(input: $input, condition: $condition) {
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
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
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
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
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
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
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
export const createUserSkill = /* GraphQL */ `
  mutation CreateUserSkill(
    $input: CreateUserSkillInput!
    $condition: ModelUserSkillConditionInput
  ) {
    createUserSkill(input: $input, condition: $condition) {
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
export const updateUserSkill = /* GraphQL */ `
  mutation UpdateUserSkill(
    $input: UpdateUserSkillInput!
    $condition: ModelUserSkillConditionInput
  ) {
    updateUserSkill(input: $input, condition: $condition) {
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
export const deleteUserSkill = /* GraphQL */ `
  mutation DeleteUserSkill(
    $input: DeleteUserSkillInput!
    $condition: ModelUserSkillConditionInput
  ) {
    deleteUserSkill(input: $input, condition: $condition) {
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
export const createSkill = /* GraphQL */ `
  mutation CreateSkill(
    $input: CreateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    createSkill(input: $input, condition: $condition) {
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
export const updateSkill = /* GraphQL */ `
  mutation UpdateSkill(
    $input: UpdateSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    updateSkill(input: $input, condition: $condition) {
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
export const deleteSkill = /* GraphQL */ `
  mutation DeleteSkill(
    $input: DeleteSkillInput!
    $condition: ModelSkillConditionInput
  ) {
    deleteSkill(input: $input, condition: $condition) {
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
export const createUserInterest = /* GraphQL */ `
  mutation CreateUserInterest(
    $input: CreateUserInterestInput!
    $condition: ModelUserInterestConditionInput
  ) {
    createUserInterest(input: $input, condition: $condition) {
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
export const updateUserInterest = /* GraphQL */ `
  mutation UpdateUserInterest(
    $input: UpdateUserInterestInput!
    $condition: ModelUserInterestConditionInput
  ) {
    updateUserInterest(input: $input, condition: $condition) {
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
export const deleteUserInterest = /* GraphQL */ `
  mutation DeleteUserInterest(
    $input: DeleteUserInterestInput!
    $condition: ModelUserInterestConditionInput
  ) {
    deleteUserInterest(input: $input, condition: $condition) {
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
export const createInterest = /* GraphQL */ `
  mutation CreateInterest(
    $input: CreateInterestInput!
    $condition: ModelInterestConditionInput
  ) {
    createInterest(input: $input, condition: $condition) {
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
export const updateInterest = /* GraphQL */ `
  mutation UpdateInterest(
    $input: UpdateInterestInput!
    $condition: ModelInterestConditionInput
  ) {
    updateInterest(input: $input, condition: $condition) {
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
export const deleteInterest = /* GraphQL */ `
  mutation DeleteInterest(
    $input: DeleteInterestInput!
    $condition: ModelInterestConditionInput
  ) {
    deleteInterest(input: $input, condition: $condition) {
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
export const createUserNotification = /* GraphQL */ `
  mutation CreateUserNotification(
    $input: CreateUserNotificationInput!
    $condition: ModelUserNotificationConditionInput
  ) {
    createUserNotification(input: $input, condition: $condition) {
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
export const updateUserNotification = /* GraphQL */ `
  mutation UpdateUserNotification(
    $input: UpdateUserNotificationInput!
    $condition: ModelUserNotificationConditionInput
  ) {
    updateUserNotification(input: $input, condition: $condition) {
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
export const deleteUserNotification = /* GraphQL */ `
  mutation DeleteUserNotification(
    $input: DeleteUserNotificationInput!
    $condition: ModelUserNotificationConditionInput
  ) {
    deleteUserNotification(input: $input, condition: $condition) {
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
export const createUserContact = /* GraphQL */ `
  mutation CreateUserContact(
    $input: CreateUserContactInput!
    $condition: ModelUserContactConditionInput
  ) {
    createUserContact(input: $input, condition: $condition) {
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
export const updateUserContact = /* GraphQL */ `
  mutation UpdateUserContact(
    $input: UpdateUserContactInput!
    $condition: ModelUserContactConditionInput
  ) {
    updateUserContact(input: $input, condition: $condition) {
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
export const deleteUserContact = /* GraphQL */ `
  mutation DeleteUserContact(
    $input: DeleteUserContactInput!
    $condition: ModelUserContactConditionInput
  ) {
    deleteUserContact(input: $input, condition: $condition) {
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
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
export const createTeamMember = /* GraphQL */ `
  mutation CreateTeamMember(
    $input: CreateTeamMemberInput!
    $condition: ModelTeamMemberConditionInput
  ) {
    createTeamMember(input: $input, condition: $condition) {
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
export const updateTeamMember = /* GraphQL */ `
  mutation UpdateTeamMember(
    $input: UpdateTeamMemberInput!
    $condition: ModelTeamMemberConditionInput
  ) {
    updateTeamMember(input: $input, condition: $condition) {
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
export const deleteTeamMember = /* GraphQL */ `
  mutation DeleteTeamMember(
    $input: DeleteTeamMemberInput!
    $condition: ModelTeamMemberConditionInput
  ) {
    deleteTeamMember(input: $input, condition: $condition) {
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
export const createTeamInvitation = /* GraphQL */ `
  mutation CreateTeamInvitation(
    $input: CreateTeamInvitationInput!
    $condition: ModelTeamInvitationConditionInput
  ) {
    createTeamInvitation(input: $input, condition: $condition) {
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
export const updateTeamInvitation = /* GraphQL */ `
  mutation UpdateTeamInvitation(
    $input: UpdateTeamInvitationInput!
    $condition: ModelTeamInvitationConditionInput
  ) {
    updateTeamInvitation(input: $input, condition: $condition) {
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
export const deleteTeamInvitation = /* GraphQL */ `
  mutation DeleteTeamInvitation(
    $input: DeleteTeamInvitationInput!
    $condition: ModelTeamInvitationConditionInput
  ) {
    deleteTeamInvitation(input: $input, condition: $condition) {
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
export const createTeamImage = /* GraphQL */ `
  mutation CreateTeamImage(
    $input: CreateTeamImageInput!
    $condition: ModelTeamImageConditionInput
  ) {
    createTeamImage(input: $input, condition: $condition) {
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
export const updateTeamImage = /* GraphQL */ `
  mutation UpdateTeamImage(
    $input: UpdateTeamImageInput!
    $condition: ModelTeamImageConditionInput
  ) {
    updateTeamImage(input: $input, condition: $condition) {
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
export const deleteTeamImage = /* GraphQL */ `
  mutation DeleteTeamImage(
    $input: DeleteTeamImageInput!
    $condition: ModelTeamImageConditionInput
  ) {
    deleteTeamImage(input: $input, condition: $condition) {
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
export const createTeamContact = /* GraphQL */ `
  mutation CreateTeamContact(
    $input: CreateTeamContactInput!
    $condition: ModelTeamContactConditionInput
  ) {
    createTeamContact(input: $input, condition: $condition) {
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
export const updateTeamContact = /* GraphQL */ `
  mutation UpdateTeamContact(
    $input: UpdateTeamContactInput!
    $condition: ModelTeamContactConditionInput
  ) {
    updateTeamContact(input: $input, condition: $condition) {
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
export const deleteTeamContact = /* GraphQL */ `
  mutation DeleteTeamContact(
    $input: DeleteTeamContactInput!
    $condition: ModelTeamContactConditionInput
  ) {
    deleteTeamContact(input: $input, condition: $condition) {
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
export const createTeamContactComment = /* GraphQL */ `
  mutation CreateTeamContactComment(
    $input: CreateTeamContactCommentInput!
    $condition: ModelTeamContactCommentConditionInput
  ) {
    createTeamContactComment(input: $input, condition: $condition) {
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
export const updateTeamContactComment = /* GraphQL */ `
  mutation UpdateTeamContactComment(
    $input: UpdateTeamContactCommentInput!
    $condition: ModelTeamContactCommentConditionInput
  ) {
    updateTeamContactComment(input: $input, condition: $condition) {
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
export const deleteTeamContactComment = /* GraphQL */ `
  mutation DeleteTeamContactComment(
    $input: DeleteTeamContactCommentInput!
    $condition: ModelTeamContactCommentConditionInput
  ) {
    deleteTeamContactComment(input: $input, condition: $condition) {
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
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
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
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
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
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
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
export const createTaskComment = /* GraphQL */ `
  mutation CreateTaskComment(
    $input: CreateTaskCommentInput!
    $condition: ModelTaskCommentConditionInput
  ) {
    createTaskComment(input: $input, condition: $condition) {
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
export const updateTaskComment = /* GraphQL */ `
  mutation UpdateTaskComment(
    $input: UpdateTaskCommentInput!
    $condition: ModelTaskCommentConditionInput
  ) {
    updateTaskComment(input: $input, condition: $condition) {
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
export const deleteTaskComment = /* GraphQL */ `
  mutation DeleteTaskComment(
    $input: DeleteTaskCommentInput!
    $condition: ModelTaskCommentConditionInput
  ) {
    deleteTaskComment(input: $input, condition: $condition) {
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
export const createVenue = /* GraphQL */ `
  mutation CreateVenue(
    $input: CreateVenueInput!
    $condition: ModelVenueConditionInput
  ) {
    createVenue(input: $input, condition: $condition) {
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
export const updateVenue = /* GraphQL */ `
  mutation UpdateVenue(
    $input: UpdateVenueInput!
    $condition: ModelVenueConditionInput
  ) {
    updateVenue(input: $input, condition: $condition) {
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
export const deleteVenue = /* GraphQL */ `
  mutation DeleteVenue(
    $input: DeleteVenueInput!
    $condition: ModelVenueConditionInput
  ) {
    deleteVenue(input: $input, condition: $condition) {
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
export const createVenueContact = /* GraphQL */ `
  mutation CreateVenueContact(
    $input: CreateVenueContactInput!
    $condition: ModelVenueContactConditionInput
  ) {
    createVenueContact(input: $input, condition: $condition) {
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
export const updateVenueContact = /* GraphQL */ `
  mutation UpdateVenueContact(
    $input: UpdateVenueContactInput!
    $condition: ModelVenueContactConditionInput
  ) {
    updateVenueContact(input: $input, condition: $condition) {
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
export const deleteVenueContact = /* GraphQL */ `
  mutation DeleteVenueContact(
    $input: DeleteVenueContactInput!
    $condition: ModelVenueContactConditionInput
  ) {
    deleteVenueContact(input: $input, condition: $condition) {
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
export const createEvent = /* GraphQL */ `
  mutation CreateEvent(
    $input: CreateEventInput!
    $condition: ModelEventConditionInput
  ) {
    createEvent(input: $input, condition: $condition) {
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
export const updateEvent = /* GraphQL */ `
  mutation UpdateEvent(
    $input: UpdateEventInput!
    $condition: ModelEventConditionInput
  ) {
    updateEvent(input: $input, condition: $condition) {
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
export const deleteEvent = /* GraphQL */ `
  mutation DeleteEvent(
    $input: DeleteEventInput!
    $condition: ModelEventConditionInput
  ) {
    deleteEvent(input: $input, condition: $condition) {
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
export const createTeamEvent = /* GraphQL */ `
  mutation CreateTeamEvent(
    $input: CreateTeamEventInput!
    $condition: ModelTeamEventConditionInput
  ) {
    createTeamEvent(input: $input, condition: $condition) {
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
export const updateTeamEvent = /* GraphQL */ `
  mutation UpdateTeamEvent(
    $input: UpdateTeamEventInput!
    $condition: ModelTeamEventConditionInput
  ) {
    updateTeamEvent(input: $input, condition: $condition) {
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
export const deleteTeamEvent = /* GraphQL */ `
  mutation DeleteTeamEvent(
    $input: DeleteTeamEventInput!
    $condition: ModelTeamEventConditionInput
  ) {
    deleteTeamEvent(input: $input, condition: $condition) {
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
export const createTeamEventImage = /* GraphQL */ `
  mutation CreateTeamEventImage(
    $input: CreateTeamEventImageInput!
    $condition: ModelTeamEventImageConditionInput
  ) {
    createTeamEventImage(input: $input, condition: $condition) {
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
export const updateTeamEventImage = /* GraphQL */ `
  mutation UpdateTeamEventImage(
    $input: UpdateTeamEventImageInput!
    $condition: ModelTeamEventImageConditionInput
  ) {
    updateTeamEventImage(input: $input, condition: $condition) {
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
export const deleteTeamEventImage = /* GraphQL */ `
  mutation DeleteTeamEventImage(
    $input: DeleteTeamEventImageInput!
    $condition: ModelTeamEventImageConditionInput
  ) {
    deleteTeamEventImage(input: $input, condition: $condition) {
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
export const createTeamEventComment = /* GraphQL */ `
  mutation CreateTeamEventComment(
    $input: CreateTeamEventCommentInput!
    $condition: ModelTeamEventCommentConditionInput
  ) {
    createTeamEventComment(input: $input, condition: $condition) {
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
export const updateTeamEventComment = /* GraphQL */ `
  mutation UpdateTeamEventComment(
    $input: UpdateTeamEventCommentInput!
    $condition: ModelTeamEventCommentConditionInput
  ) {
    updateTeamEventComment(input: $input, condition: $condition) {
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
export const deleteTeamEventComment = /* GraphQL */ `
  mutation DeleteTeamEventComment(
    $input: DeleteTeamEventCommentInput!
    $condition: ModelTeamEventCommentConditionInput
  ) {
    deleteTeamEventComment(input: $input, condition: $condition) {
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
export const createTeamEventContact = /* GraphQL */ `
  mutation CreateTeamEventContact(
    $input: CreateTeamEventContactInput!
    $condition: ModelTeamEventContactConditionInput
  ) {
    createTeamEventContact(input: $input, condition: $condition) {
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
export const updateTeamEventContact = /* GraphQL */ `
  mutation UpdateTeamEventContact(
    $input: UpdateTeamEventContactInput!
    $condition: ModelTeamEventContactConditionInput
  ) {
    updateTeamEventContact(input: $input, condition: $condition) {
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
export const deleteTeamEventContact = /* GraphQL */ `
  mutation DeleteTeamEventContact(
    $input: DeleteTeamEventContactInput!
    $condition: ModelTeamEventContactConditionInput
  ) {
    deleteTeamEventContact(input: $input, condition: $condition) {
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
export const createTeamProject = /* GraphQL */ `
  mutation CreateTeamProject(
    $input: CreateTeamProjectInput!
    $condition: ModelTeamProjectConditionInput
  ) {
    createTeamProject(input: $input, condition: $condition) {
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
export const updateTeamProject = /* GraphQL */ `
  mutation UpdateTeamProject(
    $input: UpdateTeamProjectInput!
    $condition: ModelTeamProjectConditionInput
  ) {
    updateTeamProject(input: $input, condition: $condition) {
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
export const deleteTeamProject = /* GraphQL */ `
  mutation DeleteTeamProject(
    $input: DeleteTeamProjectInput!
    $condition: ModelTeamProjectConditionInput
  ) {
    deleteTeamProject(input: $input, condition: $condition) {
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
export const createTeamProjectComment = /* GraphQL */ `
  mutation CreateTeamProjectComment(
    $input: CreateTeamProjectCommentInput!
    $condition: ModelTeamProjectCommentConditionInput
  ) {
    createTeamProjectComment(input: $input, condition: $condition) {
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
export const updateTeamProjectComment = /* GraphQL */ `
  mutation UpdateTeamProjectComment(
    $input: UpdateTeamProjectCommentInput!
    $condition: ModelTeamProjectCommentConditionInput
  ) {
    updateTeamProjectComment(input: $input, condition: $condition) {
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
export const deleteTeamProjectComment = /* GraphQL */ `
  mutation DeleteTeamProjectComment(
    $input: DeleteTeamProjectCommentInput!
    $condition: ModelTeamProjectCommentConditionInput
  ) {
    deleteTeamProjectComment(input: $input, condition: $condition) {
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
export const createTeamProjectMilestone = /* GraphQL */ `
  mutation CreateTeamProjectMilestone(
    $input: CreateTeamProjectMilestoneInput!
    $condition: ModelTeamProjectMilestoneConditionInput
  ) {
    createTeamProjectMilestone(input: $input, condition: $condition) {
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
export const updateTeamProjectMilestone = /* GraphQL */ `
  mutation UpdateTeamProjectMilestone(
    $input: UpdateTeamProjectMilestoneInput!
    $condition: ModelTeamProjectMilestoneConditionInput
  ) {
    updateTeamProjectMilestone(input: $input, condition: $condition) {
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
export const deleteTeamProjectMilestone = /* GraphQL */ `
  mutation DeleteTeamProjectMilestone(
    $input: DeleteTeamProjectMilestoneInput!
    $condition: ModelTeamProjectMilestoneConditionInput
  ) {
    deleteTeamProjectMilestone(input: $input, condition: $condition) {
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
export const createTeamProjectMilestoneComment = /* GraphQL */ `
  mutation CreateTeamProjectMilestoneComment(
    $input: CreateTeamProjectMilestoneCommentInput!
    $condition: ModelTeamProjectMilestoneCommentConditionInput
  ) {
    createTeamProjectMilestoneComment(input: $input, condition: $condition) {
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
export const updateTeamProjectMilestoneComment = /* GraphQL */ `
  mutation UpdateTeamProjectMilestoneComment(
    $input: UpdateTeamProjectMilestoneCommentInput!
    $condition: ModelTeamProjectMilestoneCommentConditionInput
  ) {
    updateTeamProjectMilestoneComment(input: $input, condition: $condition) {
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
export const deleteTeamProjectMilestoneComment = /* GraphQL */ `
  mutation DeleteTeamProjectMilestoneComment(
    $input: DeleteTeamProjectMilestoneCommentInput!
    $condition: ModelTeamProjectMilestoneCommentConditionInput
  ) {
    deleteTeamProjectMilestoneComment(input: $input, condition: $condition) {
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
export const createAsset = /* GraphQL */ `
  mutation CreateAsset(
    $input: CreateAssetInput!
    $condition: ModelAssetConditionInput
  ) {
    createAsset(input: $input, condition: $condition) {
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
export const updateAsset = /* GraphQL */ `
  mutation UpdateAsset(
    $input: UpdateAssetInput!
    $condition: ModelAssetConditionInput
  ) {
    updateAsset(input: $input, condition: $condition) {
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
export const deleteAsset = /* GraphQL */ `
  mutation DeleteAsset(
    $input: DeleteAssetInput!
    $condition: ModelAssetConditionInput
  ) {
    deleteAsset(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
