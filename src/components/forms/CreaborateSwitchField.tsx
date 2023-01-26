import { FieldValues } from "react-hook-form"
import { SwitchElement, SwitchElementProps } from "react-hook-form-mui"

export default function CreaborateSwitchField<
  T extends FieldValues = FieldValues
>(props: SwitchElementProps<T>) {
  const { ...rest } = props

  return <SwitchElement {...rest} />
}
