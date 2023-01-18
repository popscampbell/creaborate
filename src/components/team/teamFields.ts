import { TeamVisibility, TeamType } from "@/models"
import { FormBuilderFieldProps, FormBuilderFieldType } from "../formBuilder/types"

export interface teamProps {
  name: string
  searchName: string
  visibility: TeamVisibility
  description: string
  teamType: TeamType
  customTeamType?: string
}

export const newTeamProps: teamProps = {
  name: "",
  searchName: "",
  visibility: TeamVisibility.PUBLIC,
  description: "",
  teamType: TeamType.TEAM,
}

export const requiredTeamFields: FormBuilderFieldProps[] = [
  {
    label: "Public",
    name: "visibility",
    type: FormBuilderFieldType.TOGGLE,
    toggleOnValue: TeamVisibility.PUBLIC,
    toggleOffValue: TeamVisibility.PRIVATE,
  },
  { label: "Name", name: "name", type: FormBuilderFieldType.TEXT, required: true },
  {
    label: "Description",
    name: "description",
    type: FormBuilderFieldType.LONGTEXT,
    required: true,
  },
  {
    label: "Team type",
    name: "teamType",
    type: FormBuilderFieldType.CHOICE,
    options: [
      { label: "Band", value: TeamType.BAND },
      { label: "Group", value: TeamType.GROUP },
      { label: "Team", value: TeamType.TEAM },
      { label: "Custom", value: TeamType.CUSTOM },
    ]
  },
]

export const teamFields = [...requiredTeamFields, ...[
  {
    label: "Custom team type",
    name: "customTeamType",
    type: FormBuilderFieldType.TEXT,
  }
]]