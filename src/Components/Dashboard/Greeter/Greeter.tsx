import { useAuthenticator } from "@aws-amplify/ui-react"
import { Box, Typography } from "@mui/material"
import UserProfileDataStore from "DataStores/UserProfileDataStore"
import theme from "Theme"

export default function Greeter() {
  function DateLine() {
    const dateArray = new Date()
      .toLocaleDateString("en-us", { dateStyle: "full" })
      .split(", ")
    const dateLine = [dateArray[0], dateArray[1]].join(", ")

    return <Typography variant="h4" alignContent="center" children={dateLine} />
  }

  function HiUser() {
    const authenticator = useAuthenticator()
    const userProfile = UserProfileDataStore.useUserProfile(
      authenticator.user.username || ""
    )

    return <Typography variant="h4" children={`Hi, ${userProfile?.Name}`} />
  }

  function CenteredBox(props: { className?: string; children?: any }) {
    return (
      <Box
        className={props.className}
        flexGrow={1}
        display="flex"
        justifyContent="center"
        children={props.children}
        marginBottom={theme.spacing(2)}
      />
    )
  }

  return (
    <Box>
      <Box display="flex">
        <CenteredBox children={<DateLine />} />
      </Box>
      <Box display="flex">
        <CenteredBox children={<HiUser />} />
      </Box>
    </Box>
  )
}
