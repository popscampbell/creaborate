import { Address } from "@/models"
import _ from "lodash"
import { FormBuilderFieldProps, FormBuilderFieldType } from "../formBuilder/types"

export interface ContactProps {
  name: string
  email: string
  phone: string
  notes: string
  addressLine1: string
  addressLine2: string
  city: string
  stateProvince: string
  country: string
  postalCode: string
}

export const defaultContact: ContactProps = {
  name: "",
  email: "",
  phone: "",
  notes: "",
}

export function mergeDefault<T>(source: T): T {
  return _.mergeWith(source, defaultContact, (value, source) => "")
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