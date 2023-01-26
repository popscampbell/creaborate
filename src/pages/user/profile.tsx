import CreaborateForm from "@/components/forms/CreaborateForm"
import CreaborateSwitchField from "@/components/forms/CreaborateSwitchField"
import CreaborateTextField from "@/components/forms/CreaborateTextField"
import UserPage from "@/components/user/UserPage"
import { UserProfile, UserProfileVisibility } from "@/models"
import { useAppSelector } from "@/state/hooks"
import { DataStore } from "@aws-amplify/datastore"

export default function UserProfilePage() {
  const { username, profile } = useAppSelector((state) => state.user)

  function handleSave(values: UserProfile) {
    const toSave = profile
      ? UserProfile.copyOf(profile, (copy) => {
          username
          copy.name = values.name
          copy.visibility = values.visibility
          copy.tagline = values.tagline
          copy.about = values.about
        })
      : new UserProfile({
          username,
          name: values.name,
          searchName: values.name.toLowerCase(),
          visibility: values.visibility,
          tagline: values.tagline,
          about: values.about
        })

    DataStore.save(toSave)
  }

  return (
    <UserPage title="Profile">
      <CreaborateForm
        source={{
          name: profile?.name ?? "",
          visibility: profile?.visibility ?? UserProfileVisibility.PUBLIC,
          tagline: profile?.tagline ?? "",
          about: profile?.about ?? ""
        }}
        onSuccess={handleSave}
      >
        <CreaborateSwitchField name="visibility" label="Public" />
        <CreaborateTextField name="name" label="Name" />
        <CreaborateTextField name="tagline" label="Tagline" />
        <CreaborateTextField name="about" label="About" multiline />
      </CreaborateForm>
    </UserPage>
  )
}
