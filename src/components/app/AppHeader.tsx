import { ScreenSize } from "@/state/types"
import { Flex } from "@aws-amplify/ui-react"
import CloseIcon from "@mui/icons-material/Close"
import MenuIcon from "@mui/icons-material/Menu"
import { AppBar, Drawer, IconButton, Toolbar, Typography } from "@mui/material"
import Link from "next/link"
import React from "react"
import { useAppSelector } from "state/hooks"
import AppNavigator from "./AppNavigator"
import Creaborate, { CreaborateVariant } from "./Creaborate"

export default function AppHeader() {
  const { screenSize } = useAppSelector((state) => state.app)
  const { username, profile } = useAppSelector((state) => state.user)

  const [menuOpen, setMenuOpen] = React.useState(false)

  function openDrawer() {
    setMenuOpen(true)
  }

  function closeDrawer() {
    setMenuOpen(false)
  }

  return (
    <AppBar position="sticky" color="secondary">
      <Toolbar>
        {screenSize === ScreenSize.PHONE && (
          <Flex>
            <IconButton onClick={openDrawer}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={menuOpen} onClose={closeDrawer}>
              <Flex direction="column" minWidth={200}>
                <Flex padding={12} paddingInlineEnd={6}>
                  <Flex grow={1}>
                    <Typography variant="h6">Drawer</Typography>
                  </Flex>
                  <Flex>
                    <IconButton size="small" onClick={closeDrawer}>
                      <CloseIcon fontSize="small" />
                    </IconButton>
                  </Flex>
                </Flex>
                <AppNavigator />
              </Flex>
            </Drawer>
          </Flex>
        )}

        <Flex grow={1}>
          <Link href="/">
            <Creaborate variant={CreaborateVariant.HEADER} />
          </Link>
        </Flex>

        <Flex>
          <Link href="/user/profile">
            <Typography>{profile?.name ?? username ?? "sign in"}</Typography>
          </Link>
        </Flex>
      </Toolbar>
    </AppBar>
  )
}
