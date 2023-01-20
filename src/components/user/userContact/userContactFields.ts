import {
  FormBuilderFieldProps,
  FormBuilderFieldType
} from "@/components/formBuilder/types"
import { Address, Contact } from "@/models"

export interface UserContactProps {
  username: string
  contact: Contact
}

export const defaultUserContact: UserContactProps = {
  username: "",
  contact: {
    name: "",
    searchString: ""
  }
}

export const requiredUserContactFields: FormBuilderFieldProps[] = [
  { type: FormBuilderFieldType.SUBFORM, name: "contact" }
]

export const allUserContactFields = [...requiredUserContactFields]
