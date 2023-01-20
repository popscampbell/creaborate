import { FormBuilderFieldProps, FormBuilderFieldType } from "../formBuilder/types"

export interface ContactProps {
  name: string
  searchString: string
  email?: string
  phone?: string
  notes?: string
}

export const defaultContact: ContactProps = {
  name: "",
  searchString: "",
}

export const requiredContactFields: FormBuilderFieldProps[] = [
  { type: FormBuilderFieldType.TEXT, name: "name", label: "Name" }
]

export const allContactFields: FormBuilderFieldProps[] = [
  ...requiredContactFields,
  { type: FormBuilderFieldType.TEXT, name: "email", label: "Email" },
  { type: FormBuilderFieldType.TEXT, name: "phone", label: "Phone" },
  { type: FormBuilderFieldType.LONGTEXT, name: "notes", label: "Notes" },
]