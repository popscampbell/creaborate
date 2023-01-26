import UserContactForm from "@/components/user/userContact/UserContactForm"
import UserPage from "@/components/user/UserPage"
import { useAppSelector } from "@/state/hooks"
import router, { useRouter } from "next/router"

export default function UserContactPage() {
  const { contacts } = useAppSelector((state) => state.user)

  const { query } = useRouter()
  const userContactID = Array.isArray(query.userContactID)
    ? query.userContactID?.[0]
    : query.userContactID

  const userContact = contacts.find((c) => c.id === userContactID)

  function handleSaved() {
    router.push("/user/contacts")
  }

  function handleEdit() {}

  function handleDelete() {}

  return (
    <UserPage
      title={userContact?.contact.name}
      onEdit={handleEdit}
      onDelete={handleDelete}
    >
      {userContact ? (
        <UserContactForm userContact={userContact} onSaved={handleSaved} />
      ) : (
        <>User contact not found</>
      )}
    </UserPage>
  )
}
