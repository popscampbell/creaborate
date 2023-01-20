import { Address } from "@/models"
import FormBuilder from "../formBuilder/FormBuilder"
import { FormBuilderVariant } from "../formBuilder/types"
import { allAddressFields } from "./AddressProps"

export default function AddressForm(props: { address: Address }) {
  const { address } = props

  function handleSave(values: any) {}

  function handleCancel() {}

  return (
    <FormBuilder
      variant={FormBuilderVariant.SUBFORM}
      item={address}
      fields={allAddressFields}
      onSave={handleSave}
      onCancel={handleCancel}
    />
  )
}
