export enum FormBuilderFieldType {
  TEXT = "TEXT",
  LONGTEXT = "LONGTEXT",
  CHOICE = "CHOICE",
  TOGGLE = "TOGGLE",
}

export interface FormBuilderFieldProps {
  label: string
  name: string
  type: FormBuilderFieldType
  required?: boolean
  options?: {
    value: string
    label: string
  }[]
  toggleOnValue?: string
  toggleOffValue?: string
}
