import { Box } from "@mui/material"
import useStyles from "./Dashboard.styles"
import Greeter from "./Greeter/Greeter"
import TeamInvitationsWidget from "./Widget/TeamInvitationsWidget"
import TeamsWidget from "./Widget/TeamsWidget"

export default function Dashboard() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.centered}>
        <Greeter />
      </Box>
      <Box>
        <TeamsWidget />
        <TeamInvitationsWidget />
      </Box>
    </Box>
  )
}
