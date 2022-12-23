export const schema = {
    "models": {
        "TeamMember": {
            "name": "TeamMember",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Team": {
                    "name": "Team",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "UserProfile": {
                    "name": "UserProfile",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Role": {
                    "name": "Role",
                    "isArray": false,
                    "type": {
                        "enum": "TeamMemberRole"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "Status": {
                    "name": "Status",
                    "isArray": false,
                    "type": {
                        "enum": "TeamMemberStatus"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "InvitedDateTime": {
                    "name": "InvitedDateTime",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": true,
                    "attributes": []
                },
                "InvitedByUserProfile": {
                    "name": "InvitedByUserProfile",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "ConfirmedDateTime": {
                    "name": "ConfirmedDateTime",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "DeclinedDateTime": {
                    "name": "DeclinedDateTime",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "DepartedDateTime": {
                    "name": "DepartedDateTime",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": []
                },
                "DepartedComment": {
                    "name": "DepartedComment",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "TeamMembers",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byTeam",
                        "fields": [
                            "Team"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byUserProfile",
                        "fields": [
                            "UserProfile"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "Team": {
            "name": "Team",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Name": {
                    "name": "Name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "TeamType": {
                    "name": "TeamType",
                    "isArray": false,
                    "type": {
                        "enum": "TeamType"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "TeamMembers": {
                    "name": "TeamMembers",
                    "isArray": true,
                    "type": {
                        "model": "TeamMember"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "Team"
                        ]
                    }
                },
                "Visibility": {
                    "name": "Visibility",
                    "isArray": false,
                    "type": {
                        "enum": "TeamVisibility"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "Description": {
                    "name": "Description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Teams",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "UserProfile": {
            "name": "UserProfile",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Visibility": {
                    "name": "Visibility",
                    "isArray": false,
                    "type": {
                        "enum": "UserProfileVisibility"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "Username": {
                    "name": "Username",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Name": {
                    "name": "Name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "Tagline": {
                    "name": "Tagline",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Skills": {
                    "name": "Skills",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "Interests": {
                    "name": "Interests",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": false
                },
                "About": {
                    "name": "About",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Location": {
                    "name": "Location",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "TeamMembers": {
                    "name": "TeamMembers",
                    "isArray": true,
                    "type": {
                        "model": "TeamMember"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "UserProfile"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "UserProfiles",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "UserProfileVisibility": {
            "name": "UserProfileVisibility",
            "values": [
                "PRIVATE",
                "PUBLIC",
                "ARCHIVED"
            ]
        },
        "TeamVisibility": {
            "name": "TeamVisibility",
            "values": [
                "PRIVATE",
                "PUBLIC",
                "ARCHIVED"
            ]
        },
        "TeamMemberStatus": {
            "name": "TeamMemberStatus",
            "values": [
                "INVITED",
                "CONFIRMED",
                "DECLINED",
                "DEPARTED"
            ]
        },
        "TeamMemberRole": {
            "name": "TeamMemberRole",
            "values": [
                "ADMINISTRATOR",
                "MEMBER"
            ]
        },
        "TeamType": {
            "name": "TeamType",
            "values": [
                "TEAM",
                "BAND",
                "GROUP"
            ]
        }
    },
    "nonModels": {},
    "codegenVersion": "3.3.2",
    "version": "0b8e64d0b108c52f4bc2b3e1974038c0"
};