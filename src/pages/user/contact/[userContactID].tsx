import Layout from "@/components/app/Layout"
import Page from "@/components/app/Page"
import ContactForm from "@/components/contact/ContactForm"
import { defaultContact } from "@/components/contact/ContactProps"
import FormBuilder from "@/components/formBuilder/FormBuilder"
import { FormBuilderFieldType } from "@/components/formBuilder/types"
import { UserDataLoader } from "@/data/UserDataLoader"
import { Contact, UserContact } from "@/models"
import { useAppSelector } from "@/state/hooks"
import { useRouter } from "next/router"

export default function UserContactPage() {
  const { contacts } = useAppSelector((state) => state.user)

  const { query } = useRouter()
  const userContactID = Array.isArray(query.userContactID)
    ? query.userContactID?.[0]
    : query.userContactID

  function handleSave(values: UserContact) {}

  function UserContactContent(props: { userContactID: string }) {
    const userContact = contacts.find((c) => c.id === userContactID)

    const contactForm = (
      <ContactForm
        contact={userContact?.contact ?? new Contact(defaultContact)}
      />
    )

    return userContact ? (
      <Page title={userContact.contact.name}>
        <FormBuilder
          item={userContact}
          fields={[
            {
              type: FormBuilderFieldType.SUBFORM,
              name: "contact",
              subform: contactForm
            }
          ]}
          onSave={handleSave}
        ></FormBuilder>
      </Page>
    ) : (
      <>User contact not found</>
    )
  }

  return (
    <Layout>
      <UserDataLoader>
        {userContactID ? (
          <UserContactContent userContactID={userContactID} />
        ) : (
          <></>
        )}
      </UserDataLoader>
    </Layout>
  )
}
