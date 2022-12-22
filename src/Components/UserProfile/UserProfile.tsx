import { useAuthenticator } from "@aws-amplify/ui-react"
import { Box, Button, TextField, Typography } from "@mui/material"
import { Auth } from "aws-amplify"
import DeleteButton from "Components/DeleteButton"
import UserProfileVisibilityControl from "./UserProfileVisibilityControl"
import UserProfileDataStore from "DataStores/UserProfileDataStore"
import { UserProfileVisibility } from "models"
import { useState } from "react"

export default function UserProfile() {
  const { user } = useAuthenticator()
  const userProfile = UserProfileDataStore.useUserProfile(user?.username || "")

  const [name, setName] = useState("")
  const [visibility, setVisibility] = useState(
    UserProfileVisibility.PRIVATE as UserProfileVisibility
  )
  const [tagLine, setTagLine] = useState("")
  const skills: string[] = []
  const interests: string[] = []
  const [about, setAbout] = useState("")
  const [location, setLocation] = useState("")

  function handleSave() {
    userProfile
      ? UserProfileDataStore.updateUserProfile(
          userProfile,
          name,
          visibility,
          skills,
          interests,
          tagLine,
          about,
          location
        )
      : UserProfileDataStore.createUserProfile(
          name,
          visibility,
          skills,
          interests,
          tagLine,
          about,
          location
        )
  }

  function handleDelete() {
    userProfile &&
      UserProfileDataStore.deleteUserProfile(userProfile).then(() =>
        Auth.deleteUser()
      )
  }

  function handleArchive() {
    userProfile && UserProfileDataStore.archiveUserProfile(userProfile)
  }

  return (
    <Box>
      <Typography variant="subtitle1">
        Manage your public profile information.
      </Typography>
      <Box marginBottom={2}>
        <TextField
          fullWidth
          label="Name"
          id="userprofile-name"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Box>
      <Box marginBottom={2}>
        <UserProfileVisibilityControl
          visibility={visibility}
          onChange={(newVisibility) => setVisibility(newVisibility)}
        />
      </Box>
      <Box marginBottom={2}>
        <TextField
          fullWidth
          label="Tag line"
          id="userprofile-tagline"
          name="tag line"
          value={tagLine}
          onChange={(event) => setTagLine(event.target.value)}
        />
      </Box>
      <Box marginBottom={2}>
        <TextField
          fullWidth
          label="About"
          id="userprofile-about"
          name="about"
          value={about}
          onChange={(event) => setAbout(event.target.value)}
        />
      </Box>
      <Box marginBottom={2}>
        <TextField
          fullWidth
          label="Location"
          id="userprofile-location"
          name="location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </Box>
      <Button children="Save" onClick={handleSave} />
      <Button children="Archive" onClick={handleArchive} />
      <DeleteButton
        item={userProfile}
        itemType="User profile"
        onDelete={handleDelete}
      />
    </Box>
  )
}
