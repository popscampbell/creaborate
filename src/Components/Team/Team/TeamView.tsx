import { Settings } from "@mui/icons-material"
import { Box, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import TeamTasks from "Components/Task/TeamTasks"
import TeamDataStore from "DataStores/TeamDataStore/TeamDataStore"
import { useState } from "react"
import theme from "Theme"
import TeamMembers from "../TeamMembers/TeamMembers"
import TeamSettings from "./TeamSettings"

export default function TeamView(props: { teamId: string }) {
  const { teamId } = props

  const team = TeamDataStore.useTeam(teamId)

  const [open, setOpen] = useState(false)

  return (
    <Box bgcolor={theme.palette.background.entity} padding={3} borderRadius={2}>
      {team && (
        <Box>
          <Toolbar
            variant="dense"
            disableGutters={true}
            sx={{ display: "flex", justifyContent: "flex-end" }}
          >
            <IconButton
              edge="end"
              onClick={() => setOpen(true)}
              title="Settings"
            >
              <Settings />
            </IconButton>
          </Toolbar>
          <Typography variant="h1">{team.Name}</Typography>
          <TeamTasks team={team} />
          <TeamMembers team={team} />
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
