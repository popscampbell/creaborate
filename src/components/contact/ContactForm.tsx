import { Contact } from "@/models"
import { omit } from "lodash"
import CreaborateForm, {
  CreaborateFormTextFieldProps
} from "../forms/CreaborateForm"
import { ContactProps } from "./ContactProps"

export default function ContactForm(props: {
  contact: Contact
  onSubmit: (data: Contact) => void
}) {
  const { contact, onSubmit } = props

  function prepareInput(source: Contact): ContactProps {
    return {
      name: source.name ?? "",
      email: source.email ?? "",
      phone: source.phone ?? "",
      addressLine1: source.address?.addressLine1 ?? "",
      addressLine2: source.address?.addressLine2 ?? "",
      city: source.address?.city ?? "",
      stateProvince: source.address?.stateProvince ?? "",
      country: source.address?.country ?? "",
      postalCode: source.address?.postalCode ?? "",
      notes: source.notes ?? ""
    }
  }

  function prepareOutput(output: ContactProps): Contact {
    return {
      ...omit(
        output,
        "addressLine1",
        "addressLine2",
        "city",
        "stateProvince",
        "country",
        "postalCode"
      ),
      searchString: output.name.toLowerCase(),
      searchNotes: output.notes.toLowerCase(),
      ...{ address: omit(output, "name", "email", "phone", "notes") }
    }
  }

  function handleSubmit(data: ContactProps) {
    onSubmit(prepareOutput(data))
  }

  const fields: CreaborateFormTextFieldProps[] = [
    { name: "name", label: "Name", required: true },
    { name: "email", label: "Email" },
    { name: "phone", label: "phone" },
    { name: "addressLine1", label: "Street address" },
    { name: "addressLine2", label: "Address line 2" },
    { name: "city", label: "City" },
    { name: "stateProvince", label: "State/province" },
    { name: "country", label: "Country" },
    { name: "postalCode", label: "Postal (zip) code" },
    { name: "notes", label: "Notes", multiline: true }
  ]

  return (
    <CreaborateForm
      source={prepareInput(contact)}
      onSuccess={handleSubmit}
      fields={fields}
    />
  )
}
