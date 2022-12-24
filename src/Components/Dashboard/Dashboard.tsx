import { Box } from "@mui/material"
import { UserProfile } from "models"
import useStyles from "./Dashboard.styles"
import Greeter from "./Greeter/Greeter"
import TeamInvitationsWidget from "./Widget/TeamInvitationsWidget"
import TeamsWidget from "./Widget/TeamsWidget"

export default function Dashboard(props: { userProfile: UserProfile }) {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.centered}>
        <Greeter />
      </Box>
      <Box>
        <TeamsWidget userProfile={props.userProfile} />
        <TeamInvitationsWidget userProfile={props.userProfile} />
      </Box>
    </Box>
  )
}
