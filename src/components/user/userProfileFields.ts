import { UserProfileVisibility } from "@/models"
import { FormBuilderFieldProps, FormBuilderFieldType } from "../formBuilder/types"

export interface UserProfileProps {
  username: string
  name: string
  searchName: string
  visibility: UserProfileVisibility
  tagline?: string
  about?: string
  userProfileLocationID?: string
}

export const defaultUserProfile: UserProfileProps = {
  username: "",
  name: "",
  searchName: "",
  visibility: UserProfileVisibility.PUBLIC,
}

export const requiredUserProfileFields: FormBuilderFieldProps[] = [
  {
    label: "Public",
    name: "visibility",
    type: FormBuilderFieldType.TOGGLE,
    toggleOnValue: UserProfileVisibility.PUBLIC,
    toggleOffValue: UserProfileVisibility.PRIVATE,
  },
  {
    type: FormBuilderFieldType.TEXT,
    label: "Name",
    name: "name",
    required: true,
  },
]

export const allUserProfileFields = [
  ...requiredUserProfileFields,
  ...[
    { type: FormBuilderFieldType.TEXT, label: "Tagline", name: "tagline" },
    { type: FormBuilderFieldType.LONGTEXT, label: "About", name: "about" },
  ]
]