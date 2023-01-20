import React from "react"

export enum FormBuilderVariant {
  DIALOG = "DIALOG",
  FORM = "FORM",
  SUBFORM = "SUBFORM",
}

export enum FormBuilderFieldType {
  TEXT = "TEXT",
  LONGTEXT = "LONGTEXT",
  CHOICE = "CHOICE",
  TOGGLE = "TOGGLE",
  SUBFORM = "SUBFORM",
  GROUP = "GROUP",
}

export interface FormBuilderFieldProps {
  name: string
  type: FormBuilderFieldType
  label?: string
  required?: boolean
  options?: {
    value: string
    label: string
  }[]
  toggleOnValue?: string
  toggleOffValue?: string
  subform?: React.ReactNode
}