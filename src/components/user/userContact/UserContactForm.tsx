import ContactForm from "@/components/contact/ContactForm"
import { loadUserContacts } from "@/data/userUtils"
import { UserContact, Contact } from "@/models"
import { DataStore } from "aws-amplify"
import { useRouter } from "next/router"
import { useDispatch } from "react-redux"

export default function UserContactForm(props: {
  userContact: UserContact
  onSaved: () => void
}) {
  const { userContact } = props

  const dispatch = useDispatch()
  const router = useRouter()

  function onSubmit(contact: Contact) {
    const toSave = userContact.id
      ? UserContact.copyOf(userContact, (copy) => {
          copy.contact = contact
        })
      : new UserContact({
          ...userContact,
          ...{ contact }
        })

    DataStore.save(toSave).then(() => {
      loadUserContacts(userContact.username, dispatch).then(() => {
        router.push("/user/contacts")
      })
    })
  }

  return <ContactForm contact={userContact.contact} onSubmit={onSubmit} />
}
