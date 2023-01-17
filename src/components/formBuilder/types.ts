export type ItemFormFieldType = "text" | "longText" | "choice" | "toggle"

export interface FormBuilderFieldProps {
  label: string
  name: string
  type: ItemFormFieldType
  required?: boolean
  options?: {
    value: string
    label: string
  }[]
  toggleOnValue?: string
  toggleOffValue?: string
}
