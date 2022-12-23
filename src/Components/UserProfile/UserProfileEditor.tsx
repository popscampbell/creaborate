import {
  Autocomplete,
  Box,
  Button,
  Chip,
  TextField,
  Typography,
} from "@mui/material"
import { Auth } from "aws-amplify"
import { DeleteButton } from "Components/Controls"
import UserProfileVisibilityControl from "./UserProfileVisibilityControl"
import UserProfileDataStore from "DataStores/UserProfileDataStore"
import { UserProfile, UserProfileVisibility } from "models"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

const defaultVisibility = UserProfileVisibility.PUBLIC

export default function UserProfileEditor(props: { userProfile: UserProfile }) {
  const { userProfile } = props

  const navigate = useNavigate()

  const [name, setName] = useState(userProfile.Name)
  const [visibility, setVisibility] = useState(userProfile.Visibility)
  const [tagLine, setTagLine] = useState(userProfile.Tagline)
  const [skills, setSkills] = useState(userProfile.Skills as string[])
  const [interests, setInterests] = useState(userProfile.Interests as string[])
  const [about, setAbout] = useState(userProfile.About)
  const [location, setLocation] = useState(userProfile.Location)

  function handleSave() {
    if (name && skills && interests)
      userProfile
        ? UserProfileDataStore.updateUserProfile(
            userProfile,
            name,
            visibility as UserProfileVisibility,
            skills,
            interests,
            tagLine,
            about,
            location
          )
        : UserProfileDataStore.createUserProfile(
            name,
            visibility as UserProfileVisibility,
            skills,
            interests,
            tagLine,
            about,
            location
          ).then(() => navigate("/dashboard"))
  }

  function handleDelete() {
    userProfile &&
      UserProfileDataStore.deleteUserProfile(userProfile).then(() =>
        Auth.deleteUser().then(() => navigate("/"))
      )
  }

  function handleArchive() {
    userProfile &&
      UserProfileDataStore.archiveUserProfile(userProfile).then(() =>
        navigate("/")
      )
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
          placeholder="First name, first and last, or nickname - how do you want people to know you?"
          required
          onChange={(event) => setName(event.target.value)}
        />
      </Box>
      <Box marginBottom={2}>
        <UserProfileVisibilityControl
          visibility={
            (visibility || defaultVisibility) as UserProfileVisibility
          }
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
          placeholder="What are the first words you want people to read about you?"
          onChange={(event) => setTagLine(event.target.value)}
        />
      </Box>
      <Box marginBottom={3}>
        <Autocomplete
          multiple
          value={skills}
          onChange={(event, newValue) => setSkills(newValue)}
          id="userprofile-skills"
          freeSolo
          options={[]}
          renderTags={(tagValue, getTagProps) =>
            tagValue.map((skill, index) => (
              <Chip
                {...getTagProps({ index })}
                variant="outlined"
                label={skill}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              label="Skills"
              placeholder="Type in some of your mad skills. Hit enter key to add it."
            />
          )}
        />
      </Box>
      <Box marginBottom={3}>
        <Autocomplete
          multiple
          value={interests}
          onChange={(event, newValue) => setInterests(newValue)}
          id="userprofile-interests"
          freeSolo
          options={[]}
          renderTags={(tagValue, getTagProps) =>
            tagValue.map((interest, index) => (
              <Chip
                {...getTagProps({ index })}
                variant="outlined"
                label={interest}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="filled"
              label="Interests"
              placeholder="Type in some things you're into. Hit enter key to add it."
            />
          )}
        />
      </Box>
      <Box marginBottom={2}>
        <TextField
          fullWidth
          label="About"
          id="userprofile-about"
          name="about"
          value={about}
          placeholder="Tell other users a little bit about yourself."
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
          placeholder="Where are you based? (e.g. 'Seattle', `Springfield, IL`, or `Luxembourg`)"
          onChange={(event) => setLocation(event.target.value)}
        />
      </Box>
      <Button
        variant="contained"
        color="primary"
        children="Save"
        onClick={handleSave}
      />
      {userProfile && (
        <>
          <Button
            variant="outlined"
            children="Archive"
            onClick={handleArchive}
          />
          <DeleteButton
            item={userProfile}
            itemType="User profile"
            onDelete={handleDelete}
          />
        </>
      )}
    </Box>
  )
}
