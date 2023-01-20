import { Address, Contact } from "@/models"
import AddressForm from "../address/AddressForm"
import { defaultAddress } from "../address/AddressProps"
import FormBuilder from "../formBuilder/FormBuilder"
import {
  FormBuilderFieldProps,
  FormBuilderFieldType,
  FormBuilderVariant
} from "../formBuilder/types"
import { allContactFields } from "./ContactProps"

export default function ContactForm(props: { contact: Contact }) {
  const { contact } = props

  function handleSave(values: any) {}

  function handleCancel() {}

  const addressForm = (
    <AddressForm address={contact.address ?? new Address(defaultAddress)} />
  )

  const fields: FormBuilderFieldProps[] = [
    ...allContactFields,
    ...[
      {
        name: "addressform",
        label: "Address",
        type: FormBuilderFieldType.GROUP,
        subform: addressForm
      }
    ]
  ]

  return (
    <FormBuilder
      variant={FormBuilderVariant.SUBFORM}
      item={contact}
      fields={fields}
      onSave={handleSave}
      onCancel={handleCancel}
    />
  )
}
