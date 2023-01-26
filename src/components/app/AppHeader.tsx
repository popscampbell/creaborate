import { CreaborateContext, ScreenSize } from "@/state/types"
import PersonSharpIcon from "@mui/icons-material/PersonSharp"
import CloseIcon from "@mui/icons-material/Close"
import MenuIcon from "@mui/icons-material/Menu"
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography
} from "@mui/material"
import Link from "next/link"
import React from "react"
import { useAppSelector } from "state/hooks"
import AppNavigator from "./AppNavigator"
import Creaborate, { CreaborateVariant } from "./Creaborate"

export default function AppHeader() {
  const { context, screenSize } = useAppSelector((state) => state.app)
  const { username, profile } = useAppSelector((state) => state.user)
  const { team } = useAppSelector((state) => state.team)

  const [menuOpen, setMenuOpen] = React.useState(false)

  function openDrawer() {
    setMenuOpen(true)
  }

  function closeDrawer() {
    setMenuOpen(false)
  }

  return (
    <AppBar position="sticky" color="secondary">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {screenSize === ScreenSize.PHONE && (
          <Box>
            <IconButton onClick={openDrawer}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={menuOpen} onClose={closeDrawer}>
              <Box flexDirection="column" minWidth={200}>
                <Box padding={12} paddingRight={6}>
                  <Box flexGrow={1}>
                    <Typography variant="h6">Drawer</Typography>
                  </Box>
                  <Box>
                    <IconButton size="small" onClick={closeDrawer}>
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </Box>
                </Box>
                <AppNavigator />
              </Box>
            </Drawer>
          </Box>
        )}

        <Box>
          <Link href="/">
            <Creaborate variant={CreaborateVariant.HEADER} />
          </Link>
        </Box>

        {context === CreaborateContext.USER && profile && (
          <Box>
            <Typography>{profile.name}</Typography>
          </Box>
        )}

        {context === CreaborateContext.TEAM && team && (
          <Box>
            <Typography>{team.name}</Typography>
          </Box>
        )}

        <Box>
          <Link href="/user/profile">
            {username && (
              <PersonSharpIcon titleAccess={profile?.name ?? username} />
            )}
            {!username && <Typography>Sign in</Typography>}
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
