import { FormBuilderFieldProps, FormBuilderFieldType } from "../formBuilder/types"

export interface AddressProps {
  addressLine1: string
  addressLine2?: string
  city: string
  stateProvince: string
  country: string
  postalCode: string
}

export const defaultAddress: AddressProps = {
  addressLine1: "",
  addressLine2: "",
  city: "",
  stateProvince: "",
  country: "",
  postalCode: "",
}

export const allAddressFields: FormBuilderFieldProps[] = [
  { type: FormBuilderFieldType.TEXT, name: "addressLine1", label: "Address line 1" },
  { type: FormBuilderFieldType.TEXT, name: "addressLine2", label: "Address line 2" },
  { type: FormBuilderFieldType.TEXT, name: "city", label: "City" },
  { type: FormBuilderFieldType.TEXT, name: "stateProvince", label: "State/province" },
  { type: FormBuilderFieldType.TEXT, name: "country", label: "Country" },
  { type: FormBuilderFieldType.TEXT, name: "postalCode", label: "Postal code" },
]