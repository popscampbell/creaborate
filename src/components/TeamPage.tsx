import { setNavigatorSections } from "@/state/globalSlice"
import { useAppDispatch, useAppSelector } from "@/state/hooks"
import { NavigatorLink } from "@/state/types"
import AssignmentIcon from "@mui/icons-material/Assignment"
import ContactsIcon from "@mui/icons-material/Contacts"
import DashboardIcon from "@mui/icons-material/Dashboard"
import GroupIcon from "@mui/icons-material/Group"
import ImageIcon from "@mui/icons-material/Image"
import SettingsIcon from "@mui/icons-material/Settings"
import RsvpIcon from "@mui/icons-material/Rsvp"
import React, { useEffect } from "react"
import Page from "./Page"
import { useRouter } from "next/router"
import { TeamDataLoader } from "@/data/TeamDataLoader"

function TeamContent(props: { children: any }) {
  const { children } = props

  const dispatch = useAppDispatch()
  const { team, invitations } = useAppSelector((state) => state.team)

  useEffect(() => {
    const navigatorSections: NavigatorLink[] = [
      { to: "/user", label: "Dashboard", icon: <DashboardIcon /> },
      { to: "/", label: "Settings", icon: <SettingsIcon /> },
      { to: "/user/teams", label: "Teams", icon: <GroupIcon /> },
      { to: "/", label: "Tasks", icon: <AssignmentIcon /> },
      { to: "/", label: "Images", icon: <ImageIcon /> },
      { to: "/", label: "Contacts", icon: <ContactsIcon /> },
      {
        to: "/",
        label: "Invitations",
        icon: <RsvpIcon />,
        badgeContent: invitations.length,
        title: `${invitations} new invitations`
      }
    ]
    dispatch(setNavigatorSections(navigatorSections))
  }, [])

  return <Page title={team?.name}>{children}</Page>
}

export default function TeamPage(props: { children?: any }) {
  const { children } = props

  const { query } = useRouter()
  const teamID = Array.isArray(query.teamID) ? query.teamID?.[0] : query.teamID

  return teamID ? (
    <TeamDataLoader teamID={teamID}>
      <TeamContent>{children}</TeamContent>
    </TeamDataLoader>
  ) : (
    <></>
  )
}
