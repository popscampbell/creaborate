import { Box, Button, Drawer, Typography } from "@mui/material"
import TeamDataStore from "DataStores/TeamDataStore/TeamDataStore"
import { useState } from "react"
import theme from "Theme"
import TeamSettings from "./TeamSettings"

export default function TeamView(props: { teamId: string }) {
  const { teamId } = props

  const team = TeamDataStore.useTeam(teamId)

  const [open, setOpen] = useState(false)

  return (
    <Box bgcolor={theme.palette.background.entity} padding={3} borderRadius={2}>
      {team && (
        <Box>
          <Typography variant="h1">{team.Name}</Typography>
          <Button onClick={() => setOpen(true)}>Settings</Button>
          <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
            <Box margin={2}>
              <Typography variant="h5" sx={{ marginBottom: 2 }}>
                Team settings
              </Typography>
              <TeamSettings
                team={team}
                onSave={() => setOpen(false)}
                onCancel={() => setOpen(false)}
              />
            </Box>
          </Drawer>
        </Box>
      )}
    </Box>
  )
}
